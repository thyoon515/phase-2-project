import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RandomRecipe = ({ loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [loggedIn])

  return (
    <div>Random Recipes</div>
  );
}

export default RandomRecipe;