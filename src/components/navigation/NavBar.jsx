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
        <li><Link to="/findRecipe">Find Recipe</Link></li>
        <li><Link to="/randomRecipe">Random Recipes</Link></li>
        <li><Link to="/favoriteRecipe">Favorite Recipes</Link></li>
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
      <h3>Fridge Served</h3>
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
  );
}

export default NavBar;