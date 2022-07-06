import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './Note.css'

const Note = ({ id, text, date, handleDeleteNote }) => {

  return (

    <Box >
      <Grid  container className='note' rowGap={16}>
        <Grid  item >
        <span>{text}</span>
        </Grid>
        <Grid container  columnGap={28} >
       
          
        <small>{date}</small>
      
        
        <DeleteIcon  className='delete-icon'
          onClick={() => handleDeleteNote(id)}  
        />
        
        </Grid>
    
      </Grid>
    </Box>
  )
}

export default Note
