import React, { useState, useEffect } from "react";
import "./header.css";
import navLogo from "../../assets/images/Logonetflix.png";
import { Link } from "react-router-dom";
import { InfiDTapi } from "../data/cardData";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
    setSearchValue("");
  };

  const handleSearchClose = () => {
    setIsSearchActive(false);
    setSearchTerm("");
    setFilteredData([]);
  };

  const [isUserStatusOpen, setIsUserStatusOpen] = useState(false);

  const toggleUserStatus = () => {
    setIsUserStatusOpen(!isUserStatusOpen);
  };
  useEffect(() => {
    gsap.from("#nav-logo img", {});
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = InfiDTapi.filter((item) =>
        item.Name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };
  return (
    <div>
      <div className="navbar" id="navbar">
        <div id="nav-logo">
          <img src={navLogo} alt="logo" />
        </div>
        <div id="nav-menu" className={`nav-menu${isNavOpen ? "nav-open" : ""}`}>
          <ul id="nav-menu-prnt">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/portfolio">portfolio</a>
            </li>
            <li id="servi-prnt">
              <a>Service</a>
              <ul id="service">
                <li>
                  <a href="#">Download Movie</a>
                </li>
                <li>
                  <a href="#">Download Music</a>
                </li>
                <li>
                  <a href="#">Download Book</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button id="navclosem" onClick={toggleNav}>
              close
            </button>
          </ul>
        </div>
        <div id="nav-additional">
          <div id="containerSearch">
            <span id="search" className={isSearchActive ? "active" : ""}>
              <input
                type="text"
                placeholder="Search..."
                name="nav-search"
                id="nav-search"
                className="search-box"
                value={searchTerm}
                onChange={handleSearch}
              />
              <i
                className="fa-solid fa-magnifying-glass seachicon"
                onClick={handleSearchClick}
              ></i>
              <i
                className="fa-solid fa-xmark seachclose"
                onClick={handleSearchClose}
              ></i>
            </span>
            <span id="datafetchSearch">
              <ul>
                {filteredData.map((item) => (
                  <a href={`/watch/${item.Name}`}>
                    <li key={item.Name}>{item.Name}</li>
                  </a>
                ))}
              </ul>
            </span>
          </div>
          <span id="nav-user">
            <div onClick={toggleUserStatus}>
              <i className="fa-solid fa-user"></i>
            </div>
            <span
              id="nav-user-status"
              style={{ display: isUserStatusOpen ? "flex" : "none" }}
            >
              <Link to="/sign-up" draggable="false">
                <button id="sign">Sign</button>
              </Link>
              <Link to="/sign-up">
                <button id="login">Login</button>
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div id="nav-open" onClick={toggleNav}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
}

export default Navbar;
