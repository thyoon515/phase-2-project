import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const FavoriteRecipe = ({ currentGuest, loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [loggedIn])
  

  return (
    <div>
      <h1>{currentGuest.guestName}'s Favorite Recipe</h1>
    </div>
  );
}

export default FavoriteRecipe;