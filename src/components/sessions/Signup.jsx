import { useState, useEffect } from 'react';
import { baseUrl, headers } from '../../GlobalVariables'
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Signup = ({ loginGuest, guests, loggedIn }) => {
  
  const [ guestName, setGuestName ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const guest = guests.find(guest => 
      guest.guestName.toLowerCase() === guestName.toLowerCase()
    ); //find matching guestName from db.json

    if(guest) { //if there is matching account name, then send alert message
      alert("Sorry, that account name already exist, try another!")
    } else {
      fetch(baseUrl + '/guests', {
      method: "POST",
      headers,
      body: JSON.stringify({ guestName })
      })
     .then(res => res.json())
     .then(data => {
      loginGuest(data);
      navigate('/enterZipcode') //redirect the page after signup
      }) 
    }
    setGuestName("")
  }

  useEffect(() => {//if guest is already logged in, can not access signup page
    if(loggedIn){
      return navigate('/enterZipcode')//redirect page
    }
  },[navigate, loggedIn])

  return (
    <div align="center">
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="guestName"> Account Name: </label>
          <Input 
            type="text" 
            name="guestName" 
            id="guestName" 
            value={ guestName } 
            onChange={ e => setGuestName(e.target.value)}
            placeholder="Enter Here"
          />
          <Button variant="contained" type='submit'>Create Account</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;