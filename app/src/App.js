import React, {useState, useEffect} from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const themeLight = createTheme({
	palette: {
	  background: {
		default: "white"
	  }
	}
  });
  
  const themeDark = createTheme({
	palette: {
	  background: {
		default: "#222222"
	  },
	  text: {
		primary: "#ffffff"
	  }
	}
  });


function App() {

 const [notes, setNotes] = useState([]);
 const [searchText, setSearchText] = useState('');
 const [light, setLight] = useState(true);


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
      <>
	    <ThemeProvider theme={light ? themeLight : themeDark}>
	      <CssBaseline/>
          
		    <Container>

       		<Box sx={{ height: '100vh'}}>
			<Header handleToggleBackground={setLight} />
      		<Search handleSearchNote={setSearchText} />
     		<NoteList
       			 notes={notes.filter((note) =>
         		 note.text.toLowerCase().includes(searchText)
      		  )}
        		handleAddNote={addNote}
        		handleDeleteNote={deleteNote}
     		 />
			</Box>

             </Container>
		</ThemeProvider>
    </>

  );
}

export default App;
