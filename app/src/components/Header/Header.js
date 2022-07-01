import React from 'react';
import Button from '@mui/material/Button';
import './Header.css';

const Header = ({change}) => {
   
  return (
    <div className='header-container'>
        <h1><span className='title'>React</span> Notes</h1>
        <Button variant="outlined" onClick={change}
        sx={{ border: '2px solid green', borderRadius:'15px', backgroundColor:'#f9f4f4', textTransform:'capitalize', color:'black',fontWeight:'bold' }}>
          Toggle Mode
          </Button>
        
    </div>
  )
}

export default Header
