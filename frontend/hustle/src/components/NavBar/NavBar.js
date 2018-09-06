import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import './NavBar.css';

const NavBar = (props) => {
    return (
        <AppBar position="static">
          <Toolbar style={{backgroundColor: 'rgba(212, 226, 14, 0.842)'}} className='nav-toolbar'>
            <Typography variant="display2" color="inherit">
              Hustle.
            </Typography>
            <Button 
              style={{ fontSize: '1.5rem', backgroundColor: '#5c75e6' }} 
              color="inherit" 
              variant='contained' 
              className='logout-btn'
              size="medium"
              >Logout
            </Button>
          </Toolbar>
        </AppBar>
    );
  }

  export default NavBar;
