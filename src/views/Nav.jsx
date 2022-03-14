import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/nav.css';

export default function Nav() {
  return (
    <nav className="container-fluid">
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
      <NavLink
        activeclassname="active"
        className="link"
        to="/recipe/17WMIvrpXN12XIKI7Q3rPh"
      >
        Recipe
      </NavLink>
      <div className="nav-search-div">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}
