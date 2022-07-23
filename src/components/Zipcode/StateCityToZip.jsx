import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StateCityToZip = ({ loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [navigate, loggedIn])


  return (
    <div>
      <h1>Zipcode</h1>
    </div>
  );
}

export default StateCityToZip;