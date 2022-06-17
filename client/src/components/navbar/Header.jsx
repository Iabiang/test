import React from "react";
import { Link } from "react-router-dom";

const Header = ({ homeRoute }) => {
  return (
    <nav>
      <Link to={`${homeRoute}`}>Home</Link>
      <Link to={`${homeRoute}/about`}>About</Link>
    </nav>
  );
};

export default Header;
