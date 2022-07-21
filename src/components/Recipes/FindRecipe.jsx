import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FindRecipe = ({ loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')//redirect to login page after logging out
    }
  }, [loggedIn])

  return (
    <div>
      <form>
        <label htmlFor="search" className="search">Search: </label>
        <input type="text" className="search" />
      </form>
    </div>
  );
}

export default FindRecipe;