import React from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

import Box from '@mui/material/Box';

import './NoteList.css';


const NoteList = ({notes, handleAddNote,handleDeleteNote}) => {

  return (

    <Box className='list-container'>
         
       {notes.map((note) => (<Note 
       id={note.id}
       key={note.id}
       text={note.text}
       date={note.date}
       handleDeleteNote={handleDeleteNote}/>
        ))}

      <AddNote handleAddNote={handleAddNote} />
       
    </Box>
   
  )
}

export default NoteList