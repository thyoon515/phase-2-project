import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteRecipe from "./components/Recipes/FavoriteRecipe";
import IngredientsRecipe from "./components/Recipes/IngredientsRecipe";
import RandomRecipe from "./components/Recipes/RandomRecipe";
import Login from "./components/sessions/Login";
import Signup from "./components/sessions/Signup";
import Home from "./components/static/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ingredientsRecipe" element={<IngredientsRecipe />} />
        <Route path="/favortieRecipe" element={<FavoriteRecipe />} />
        <Route path="/randomRecipe" element={<RandomRecipe />} />
      </Routes>
      
    </Router>
  );
}

export default App;
