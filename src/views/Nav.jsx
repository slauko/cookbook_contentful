import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css';

export default function Nav() {
  return (
    <nav>
      <NavLink activeclassname="active" className="link" to="/">
        Home
      </NavLink>
      <NavLink
        activeclassname="active"
        className="link"
        to="/search?query=kuchen&type=desert"
      >
        Search
      </NavLink>
      <NavLink activeclassname="active" className="link" to="/recipe/1">
        Recipe
      </NavLink>
      <div className="nav-search-div">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}
