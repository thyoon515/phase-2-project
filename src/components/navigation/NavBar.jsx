import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const NavBar = ({ loggedIn, logoutGuest }) => {

  const logout = e => {
    e.preventDefault();
    logoutGuest();
  }

  const loggedInLinks = () => {
    return(
      <>
        <Button color="inherit" component={ Link } to="/">Home</Button>
        <Button color="inherit" component={ Link } to="/enterZipcode">Enter Zipcode</Button>
        <Button color="inherit" onClick={ logout }>Logout</Button>
      </>
    )
  }

  const loggedOutLinks = () => {
    return(
      <>
        <Button color="inherit" component={ Link } to="/">Home</Button>
        <Button color="inherit" component={ Link } to="/signup">Signup</Button>
        <Button color="inherit" component={ Link } to="/login">Login</Button>
      </>
    )
  }

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Locate Zipcode
            </Typography>
            { loggedIn ? loggedInLinks() : loggedOutLinks() }
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default NavBar;