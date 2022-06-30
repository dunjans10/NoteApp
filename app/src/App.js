import React, {useState} from "react";
import Header from "./components/Header/Header";

import './App.css'

function App() {

  const [isActive, setIsActive] = useState(false);

  const changeBackgroundColor = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div style={{
          backgroundColor: isActive ? 'black' : ''
        }}>
      <div className="container">
        <Header change={changeBackgroundColor}/>
      </div>
     </div>
    </>
  );
}

export default App;
