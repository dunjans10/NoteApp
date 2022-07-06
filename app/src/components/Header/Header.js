import React from 'react';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

const Header = ({handleToggleBackground}) => {
   
  return (
  
    <Box container style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    
        <Box item xs={8}>
             <h1><span style={{color:'rgb(45, 199, 127)'}}>React</span> Notes</h1>
        </Box>

        <Box item xs={8}>
              <Button variant="outlined" onClick={() =>
                 handleToggleBackground((previous) => !previous)
               }
               
                sx={{ border: '2px solid rgb(45, 199, 127)', borderRadius:'15px', backgroundColor:'#f9f4f4', 
                    textTransform:'capitalize', color:'black',fontWeight:'bold' }}>

                     Toggle Mode
  
              </Button>
         </Box>
   
    </Box>

  )
}

export default Header


