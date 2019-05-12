import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="menu">
      <Link to="/">
        <h1>The best Weather Forecast we ever made</h1>
      </Link>
      <Link to="/settings">
        <i className="fas fa-cog" />
      </Link>
    </nav>
  );
};

export default Header;
