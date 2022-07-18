import { useState } from 'react';
import { baseUrl, headers } from '../../GlobalVariables'

const Signup = () => {
  const [ guestName, setGuestName ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(baseUrl + '/guests', {
      method: "POST",
      headers,
      body: JSON.stringify({ guestName })
    })
     .then(res => res.json())
     .then(data => console.log(data))
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