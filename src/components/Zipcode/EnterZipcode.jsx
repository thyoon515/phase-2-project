import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ZipcodeCard from './ZipcodeCard';

const EnterZipcode = ({ loggedIn }) => {

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
    console.log(zipcode)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {zipcode}
    fetch(`http://api.zippopotam.us/us/${formData.zipcode}`)
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipcode" className="zipcode">Zipcode: </label>
        <input type="number" className="zipcode" value={zipcode} onChange={handleZipcode}/>
        <button type='submit'>Enter</button>
      </form>
      <div>
        { error ? <h1> {error} </h1> : <ZipcodeCard key={zipcode} location={location} /> }
      </div>
    </div>
  );
}

export default EnterZipcode;