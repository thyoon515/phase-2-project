import { useState } from 'react';
import { baseUrl, headers } from '../../GlobalVariables'
import { useNavigate } from 'react-router-dom';

const Signup = ({ loginGuest }) => {
  const [ guestName, setGuestName ] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch(baseUrl + '/guests', {
      method: "POST",
      headers,
      body: JSON.stringify({ guestName })
    })
     .then(res => res.json())
     .then(data => {
      loginGuest(data);
      navigate('/ingredientsRecipe') //redirect after signup
    }) 
  }

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