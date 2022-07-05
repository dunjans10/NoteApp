import React from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

import './NoteList.css';

const NoteList = ({notes, handleAddNote,handleDeleteNote}) => {

  return (

    <div className='list-container'>
         
       {notes.map((note) => (<Note 
       id={note.id}
       key={note.id}
       text={note.text}
       date={note.date}
       handleDeleteNote={handleDeleteNote}/>
        ))}

      <AddNote handleAddNote={handleAddNote} />
       
    </div>
  )
}

export default NoteList