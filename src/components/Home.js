import React from "react";
import { useGlobalContext } from "../context";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import "./home.css";
const Home = () => {
  const { submitHandler, inputStatus, name, refSearch, emptySearchBar, item } =
    useGlobalContext();

  return (
    <main className="Home">
      <section className={emptySearchBar ? "icons" : "iconNone"}>
        <div className="space"></div>
        <div className="links">
          <p>Gmail</p>
          <p>Images</p>
          <div>
            <AppsIcon />
          </div>
        </div>
      </section>
      <form
        className={emptySearchBar ? "empty" : "fulllsearch"}
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="googleLogo">
          <img
            src="https://iabtechlab.com/wp-content/uploads/2018/12/google-logo-768x260.png"
            alt=""
            className="googleImg"
          />
        </div>
        <div className={emptySearchBar ? "input" : "inputSearch"}>
          <input
            type="text"
            onChange={(e) => inputStatus(e)}
            value={name}
            placeholder="Search Google or type URL"
            ref={refSearch}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/625px-Google_mic.svg.png"
            alt=""
            className="micImg"
          />
          <button type="submit" className="submitSearch">
            <SearchIcon />
          </button>
        </div>

        <section className={emptySearchBar ? "iconNone" : "iconSearch"}>
          <div className="spaceSearch"></div>
          <div className="linkSearch">
            <p>Gmail</p>
            <p>Images</p>
            <div>
              <img
                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
                alt=""
                className="profilePic"
              />
            </div>
          </div>
        </section>
      </form>

      <section className={emptySearchBar ? "bookmarks" : "nonemarks"}>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/Chrome-logo-768x432.png"
            alt=""
          />
          <p>Chrome</p>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0"
            alt=""
          />
          <p>FreeCodeCamp</p>
        </div>
        <div>
          <img
            src="https://image.flaticon.com/icons/png/512/32/32339.png"
            alt=""
          />
          <p>Add Shortcuts</p>
        </div>
      </section>
      <article className="searchResults">
        <div>
          {item.map((entry, index) => {
            const { title, snippet, link, displayLink } = entry;
            return (
              <div key={index} className="searchBlock">
                <a href={link} target="_blank">
                  {displayLink}
                </a>
                <br />
                <a href={link} target="_blank">
                  <h3>{title}</h3>
                </a>
                <p>{snippet}</p>
              </div>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default Home;
