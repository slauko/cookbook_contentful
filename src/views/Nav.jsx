import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

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
    </nav>
  );
}
