import React from 'react';
import AddNote from '../AddNote/AddNote';
import { Grid, Box  } from '@mui/material';

import './NoteList.css';

const NoteList = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} >
      
      <Grid item xs={4} >
        <AddNote/>
      </Grid>
      <Grid item xs={4} >
        <AddNote/>
      </Grid>
      <Grid item xs={4} >
        <AddNote/>
      </Grid>
      <Grid item xs={4} >
        <AddNote/>
      </Grid>
     

    
    
    </Grid>
  </Box>
    // <Grid container spacing={6} columns={{ xs: 4, sm: 8, md: 12 }}>
    //   <Grid item xs>
    //     <AddNote />
    //   </Grid>
    // </Grid>
  )
}

export default NoteList