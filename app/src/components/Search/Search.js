import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import './Search.css';
import { Box } from '@mui/material';

const Search = ({	handleSearchNote}) => {
  
  return (
    <Box sx={{ backgroundColor:'#f9f4f4', borderRadius:'7px', border:'2px solid rgb(45, 199, 127)'}}>

       <IconButton sx={{ p: '15px'}} >
          <SearchIcon />
       </IconButton>

       <InputBase

        placeholder="Search for your notes..."
        inputProps={{ 'aria-label': 'Search for your notes...' }}
        onChange={(event) =>	handleSearchNote(event.target.value)}

       />
    </Box>
 
  )
}

export default Search

