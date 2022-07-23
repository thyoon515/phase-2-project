import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterZipcode = ({ loggedIn }) => {

  const [zipcode, setZipcode] = useState([])
  const [location, setLocation] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')//redirect to login page after logging out
    }
  }, [navigate, loggedIn])

  const handleZipcode = (e) => {
    e.preventDefault();
    setZipcode(e.target.value)
  }

  useEffect(() => {
    fetch(`http://api.zippopotam.us/us/${zipcode}`)
      .then(res => res.json())
      .then(data => setLocation(data))
  },[zipcode, location])


  return (
    <div>
      <form>
        <label htmlFor="zipcode" className="zipcode">Zipcode: </label>
        <input type="number" className="zipcode" onChange={handleZipcode}/>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default EnterZipcode;