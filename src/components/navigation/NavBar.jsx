import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <h3>Fridge Served</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/ingredientsRecipe">Ingredients to Recipe</Link></li>
        <li><Link to="/favoriteRecipe">Favorite Recipes</Link></li>
        <li><Link to="/randomRecipe">Random Recipes</Link></li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default NavBar;