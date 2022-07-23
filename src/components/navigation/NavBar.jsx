import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logoutGuest }) => {

  const logout = e => {
    e.preventDefault();
    logoutGuest();
  }

  const loggedInLinks = () => {
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/enterZipcode">Enter Zipcode</Link></li>
        <li><Link to="/stateCityToZip">State/City To Zipcode</Link></li>
        <li><Link to="/myList">My List</Link></li>
        <li><a href='#' onClick={ logout }>Logout</a></li>
      </ul>
    )
  }

  const loggedOutLinks = () => {
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    )
  }

  return (
    <div>
      <h3>Locate Zipcode</h3>
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
  );
}

export default NavBar;