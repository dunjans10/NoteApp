import React, {useState} from 'react';

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

  <div className='add-container' onSubmit={handleSaveClick}>

		<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
		<div className='note-footer'>
			<small>
				{characterLimit - noteText.length} Remaining
			</small>
			<button className='btn-save' onClick={handleSaveClick}>
					Save
			</button>
		</div>    
  </div>
 
  )
}

export default AddNote