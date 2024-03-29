import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import EnterZipcode from "./components/Zipcode/EnterZipcode";
import Login from "./components/sessions/Login";
import Signup from "./components/sessions/Signup";
import Home from "./components/static/Home";
import { baseUrl } from "./GlobalVariables";

function App() {

  const [currentGuest, setCurrentGuest] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);//logged out as initial value
  const [guests, setGuests] = useState([]);

  const loginGuest = guest => {
    setCurrentGuest(guest);
    setLoggedIn(true);
    localStorage.setItem('guest_id', guest.id); 
  }

  const logoutGuest = () => {
    setCurrentGuest({});
    setLoggedIn(false);
    localStorage.removeItem('guest_id');
  }

//persist logged in guest
  useEffect(() => {
    const guestId = localStorage.getItem('guest_id');
    if(guestId && !loggedIn)
      fetch(baseUrl + '/guests/' + guestId)
        .then(res => res.json())
        .then(data => loginGuest(data))
  },[loggedIn])

  return (
    <Router>
      <NavBar loggedIn={loggedIn} logoutGuest={logoutGuest} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup loggedIn={loggedIn} loginGuest={loginGuest} guests={guests} />} />
        <Route path="/login" element={<Login loggedIn={loggedIn} loginGuest={loginGuest} guests={guests} setGuests={setGuests} />} />
        <Route path="/enterZipcode" element={<EnterZipcode loggedIn={loggedIn} currentGuest={currentGuest} />} />
      </Routes>
    </Router>
  );
}

export default App;
