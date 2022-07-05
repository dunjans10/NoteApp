import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import './Note.css'

const Note = ({ id, text, date, handleDeleteNote }) => {

  return (

    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
          <small>{date}</small>
          <DeleteIcon  className='delete-icon'
              onClick={() => handleDeleteNote(id)}  
            />
        </div>
    </div>  
  )
}

export default Note