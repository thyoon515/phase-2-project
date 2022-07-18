import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../GlobalVariables';

const Login = ({ loginGuest }) => {

  const [guestName, setGuestName] = useState("");
  const [guests, setGuests] = useState([]);

  const navigate = useNavigate(0);


  const handleChange = e => {
    setGuestName(e.target.value);
  }
  
  const handleSubmit = e => {
    e.preventDefault();

    const guest = guests.find(guest => 
      guest.guestName.toLowerCase() === guestName.toLowerCase()
    ); //find matching guestName from db.json
    
    if(guest) {
      loginGuest(guest);
      navigate('/ingredientsRecipe'); //redirect page
    }

  }

  useEffect(() => {
    fetch(baseUrl + "/guests")
     .then(res => res.json())
     .then(data => setGuests(data)) //set guests data with controlled state
  }, [])
  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="guestName">Account Name: </label>
          <input 
            type="text" 
            name='guestName' 
            id='guestName' 
            onChange={handleChange} 
            value={guestName} 
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;