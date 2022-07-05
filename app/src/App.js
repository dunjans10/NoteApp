import React, {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";


import './App.css'

function App() {

 const [notes, setNotes] = useState([]);
 const [searchText, setSearchText] = useState('');
 const [darkBackground, setDarkBackground] = useState(false);



	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);


	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);



	const addNote = (text) => {
	
		const newNote = {
			id: new Date().getTime().toLocaleString(),
			text: text,
			date: new Date().toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};


	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};


  return (
    <div className={`${darkBackground && 'dark-background'}`}>
    <div className='container'>
      <Header handleToggleBackground={setDarkBackground} />
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  </div>
  );
}

export default App;
