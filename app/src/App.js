import React, {useState} from "react";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";

import CssBaseline from '@mui/material/CssBaseline';

import './App.css'

function App() {

  const [isActive, setIsActive] = useState(false);


  const changeBackgroundColor = () => {
    setIsActive(!isActive)
  }

  return (
    <>
     <CssBaseline />
      <div style={{
          backgroundColor: isActive ? 'black' : ''
        }}>
      <div className="container">
        <Header change={changeBackgroundColor}/>
        <Search/>
        <NoteList/>
      </div>
     </div>
    </>
  );
}

export default App;
