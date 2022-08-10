import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ZipcodeCard from './ZipcodeCard';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const EnterZipcode = ({ loggedIn, currentGuest }) => {

  const [zipcode, setZipcode] = useState("");
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null)
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!loggedIn){
      navigate('/login')//redirect to login page after logging out
    }
  }, [navigate, loggedIn])
  
  const handleZipcode = (e) => {
    setZipcode(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://api.zippopotam.us/us/${zipcode}`)
      .then(res => {
        if(!res.ok){
          throw Error('Invalid zipcode, try another')
        }
        return res.json()})
      .then(data => {
        setLocation(data.places)
        setError(null)
      })
      .catch(error => {
        setError(error.message)
      })
    setZipcode("")
  }
  
  return (
    <div align="center">
      <h1>Welcome, {currentGuest.guestName}!</h1>
      <h2>⬇️ Enter Zipcode Below ⬇️</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Enter Zipcode Here' type="number" value={zipcode} onChange={handleZipcode}/>
        <Button variant="contained" type='submit'>Enter</Button>
      </form>
      <div>
        { error ? <h1> {error} </h1> : <ZipcodeCard key={zipcode} location={location} /> }
      </div>
    </div>
  );
}

export default EnterZipcode;