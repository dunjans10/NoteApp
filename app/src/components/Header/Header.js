import React from 'react';
import Button from '@mui/material/Button';
import './Header.css';

const Header = ({handleToggleBackground}) => {
   
  return (
    <div className='header-container'>

        <h1><span className='title'>React</span> Notes</h1>

          <Button variant="outlined" onClick={() =>
				    	handleToggleBackground((previous) => !previous)
				}

           sx={{ border: '2px solid rgb(45, 199, 127)', borderRadius:'15px', backgroundColor:'#f9f4f4', 
           textTransform:'capitalize', color:'black',fontWeight:'bold' }}>

          Toggle Mode
          
          </Button>
    </div>
  )
}

export default Header
