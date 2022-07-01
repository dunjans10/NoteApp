import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import './Search.css';

const Search = () => {
  
  return (
    <div className='search-container'>
       <IconButton sx={{ p: '15px'}} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search for your notes..."
        inputProps={{ 'aria-label': 'Search for your notes...' }}
      />
     </div>
 
  )
}

export default Search

// <input className='search-input' type="text" placeholder='Search for your notes...'/>
//<SearchIcon className='icon'/>
//<TextField  sx={{border: '2px solid green', borderRadius: 2}} fullWidth label="Search for your notes..." id="fullWidth" />