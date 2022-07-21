import { useState, useEffect } from 'react';
import { baseUrl, headers } from '../../GlobalVariables'
import { useNavigate } from 'react-router-dom';

const Signup = ({ loginGuest, guests, loggedIn }) => {
  const [ guestName, setGuestName ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const guest = guests.find(guest => 
      guest.guestName.toLowerCase() === guestName.toLowerCase()
    ); //find matching guestName from db.json

    if(guest) { //if there is matching account name, then send alert message
      alert("Sorry, it is already taken, try another!")
    } else {
      fetch(baseUrl + '/guests', {
      method: "POST",
      headers,
      body: JSON.stringify({ guestName })
      })
     .then(res => res.json())
     .then(data => {
      loginGuest(data);
      navigate('/ingredientsRecipe') //redirect the page after signup
      }) 
    }
  }

  useEffect(() => {//if guest is already logged in, can not access signup page
    if(loggedIn){
      return navigate('/ingredientsRecipe')//redirect page
    }
  },[loggedIn])

  return (
    <div>
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="guestName"> Account Name: </label>
          <input 
            type="text" 
            name="guestName" 
            id="guestName" 
            value={ guestName } 
            onChange={ e => setGuestName(e.target.value)}/>
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Signup;