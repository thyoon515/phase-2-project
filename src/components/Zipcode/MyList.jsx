import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const MyList = ({ currentGuest, loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [navigate, loggedIn])
  

  return (
    <div>
      <h1>{currentGuest.guestName}'s List</h1>
    </div>
  );
}

export default MyList;