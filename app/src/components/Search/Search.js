import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

import './Search.css';

const Search = () => {
  return (
    <div className='wrapper'>
        <AiOutlineSearch className='icon'/>
        <input className='search-input' type="text" placeholder='Search for your notes...'/>
     </div>
 
  )
}

export default Search