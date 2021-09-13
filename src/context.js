import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [searchValue, setSearchValue] = useState(name);
  const [item, setItem] = useState([]);
  const refSearch = useRef("");
  const [emptySearchBar, setEmptySearchBar] = useState(true);
  const inputStatus = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(refSearch.current.value);
    if (name.length >= 1) {
      setEmptySearchBar(false);
    }
    setName("");
  };
  const getData = async () => {
    const API_KEY = "YOUR CUSTOM SEARCH API KEY";
    const CONTEXT_KEY = "YOUR SEARCH ENGINE ID";
    const result = await axios(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchValue}`
    );
    setItem(result.data.items);
    console.log(result.data);
  };
  useEffect(() => {
    if (searchValue.length >= 1) {
      getData();
    }
  }, [searchValue]);
  return (
    <AppContext.Provider
      value={{
        inputStatus,
        name,
        submitHandler,
        searchValue,
        item,
        refSearch,
        emptySearchBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
