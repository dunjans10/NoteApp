import React, {useState} from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';


import './AddNote.css'

const AddNote = ({handleAddNote}) => {

  const [noteText, setNoteText] = useState('');
  const characterLimit = 300;

	const handleChange = (event) => {
	if (characterLimit - event.target.value.length >= 0) {
		setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};
 
return (
	<Box className='add-container'>

  		<Grid container  onSubmit={handleSaveClick}>

		<TextareaAutosize

		 minRows={8}
 		 placeholder="Type to add a note..."
  		 value={noteText}
		 onChange={handleChange}
		/>

		
		<Grid container className='wrapper'>
			<small>
				{characterLimit - noteText.length} Remaining
			</small>
			<Button variant="outlined" onClick={handleSaveClick}
               
                sx={{ border: '2px solid green', borderRadius:'15px', backgroundColor:'#f9f4f4', 
                    textTransform:'capitalize', color:'black',fontWeight:'bold' }}>

                     Save
  
              </Button>
			
		</Grid>    
  </Grid>
  </Box>
  )
}

export default AddNote

