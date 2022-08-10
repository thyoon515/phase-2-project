import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../GlobalVariables';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Login = ({ loginGuest, guests, setGuests, loggedIn }) => {

  const [ guestName, setGuestName ] = useState("");
  
  const navigate = useNavigate();

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
      navigate('/enterZipcode'); //redirect page
    } else {//if there is no match, alert error message
      alert("Account name was not found, try another!")
    }
    setGuestName("")
  }

  useEffect(() => {//if guest is already logged in, can not access login page
    if(loggedIn){
      return navigate('/enterZipcode')//redirect page
    }
    fetch(baseUrl + "/guests")
     .then(res => res.json())
     .then(data => setGuests(data)) //set guests data with controlled state
  }, [loggedIn, navigate, setGuests])

  return (
    <div align="center">
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="guestName">Account Name: </label>
          <Input 
            type="text" 
            name='guestName' 
            id='guestName' 
            onChange={handleChange} 
            value={guestName}
            placeholder="Enter Here" 
          />
          <Button variant="contained" type='submit'>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;