import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const IngredientsRecipe = ({ loggedIn }) => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!loggedIn){
      navigate('/login')//redirect to login page after logging out
    }
  }, [loggedIn])

  return (
    <div>Ingredients Recipe</div>
  );
}

export default IngredientsRecipe;