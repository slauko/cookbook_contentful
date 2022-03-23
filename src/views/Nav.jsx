import React, { useState } from 'react';
// import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Util from '../classes/Util';
import CookbookService from '../api/recipeService';
import { FaSignInAlt } from 'react-icons/fa';
import './css/nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const colors = [
  'blue-1',
  'dark-green',
  'gray-rose',
  'green-1',
  'red-1',
  'yellow',
];

export default function Nav() {
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    console.log('inputSearch', inputSearch);
    if (inputSearch.length >= 0) {
      navigate(`/search?query=${inputSearch}`);
    }
  }

  /** TEST */
  function handleCreateUser() {
    console.log('test api -> create User');

    const testuser = {
      username: 'Mike',
      email: 'mike@wbs.de',
      validated: true,
    };

    CookbookService.createUser(testuser);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top mb-0">
      <div className="container-fluid">
        <div className="navbar-brand d-flex gap-3" href="#">
          <img
            width={40}
            src="https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/5820/s300/wbs-20coding-20school-20logo.png"
            alt="Logo WBS Cookbook"
          />
          <div className="d-block d-md-none">
            <button className="d-flex gap-2 align-items-center border border-1 rounded-3 p-1 mt-1">
              <div style={{ fontSize: '8pt' }}>Login</div>
              <FaSignInAlt size={20} />
            </button>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse gap-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link link"
                to={`/`}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                activeclassname="active"
                className="nav-link link"
                to={`/search`}
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <button onClick={handleCreateUser} className="nav-link link">
                Create User
              </button>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recipes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    activeclassname="active"
                    className="nav-link link"
                    to={`/search`}
                  >
                    Newest
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    className="nav-link link"
                    to={`/search`}
                  >
                    Best
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    activeclassname="active"
                    className="nav-link link"
                    to={`/search`}
                  >
                    Your Favourites
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Colors
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {colors.map((color, index) => (
                  <li
                    key={index}
                    onClick={() => Util.changeColor(color, true)}
                    className="d-flex gap-2 align-items-center"
                  >
                    <div className={`color-scheme scheme-${color} m-1`}></div>
                    <div>{color.replaceAll('-1', '')}</div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="d-flex flex-grow-1 align-items-center gap-5">
            <form onSubmit={handleSearch} className="d-flex flex-grow-1">
              <div className="searchBar">
                <input
                  onChange={({ target }) => setInputSearch(target.value)}
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder="Search"
                  value={inputSearch}
                />
                <button
                  id="searchQuerySubmit"
                  type="submit"
                  name="searchQuerySubmit"
                >
                  <svg
                    style={{ width: '24px', height: '24px' }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#666666"
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className="d-none d-md-block">
              <button className="border border-1 rounded-3 p-2">
                <FaSignInAlt size={20} />
                <div style={{ fontSize: '9pt', fontWeight: 'lighter' }}>
                  Login
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="container-fluid">
    //   <NavLink activeclassname="active" className="link" to="/">
    //     Home
    //   </NavLink>
    //   <NavLink
    //     activeclassname="active"
    //     className="link"
    //     to="/search?query=kuchen&type=desert"
    //   >
    //     Search
    //   </NavLink>
    //   <NavLink
    //     activeclassname="active"
    //     className="link"
    //     to="/recipe/17WMIvrpXN12XIKI7Q3rPh"
    //   >
    //     Recipe
    //   </NavLink>
    //   <div className="nav-search-div">
    //     <input type="text" placeholder="Search" />
    //   </div>
    // </nav>
  );
}
