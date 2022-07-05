import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';

import './Search.css';

const Search = ({	handleSearchNote}) => {
  
  return (
    <div className='search-container'>

       <IconButton sx={{ p: '15px'}} aria-label="menu">
          <SearchIcon />
       </IconButton>

       <InputBase

        placeholder="Search for your notes..."
        inputProps={{ 'aria-label': 'Search for your notes...' }}
        onChange={(event) =>	handleSearchNote(event.target.value)}

       />
    </div>
 
  )
}

export default Search

