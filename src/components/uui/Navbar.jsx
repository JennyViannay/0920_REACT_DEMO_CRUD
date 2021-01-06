import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <Link to="/">Home</Link>
        <Link to="/add">Add Article</Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
