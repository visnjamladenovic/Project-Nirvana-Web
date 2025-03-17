import React, {useEffect, useState} from 'react';
import './App.css';
import {connection} from "./api";
import Song from "./models/song";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  const [song, setSong] = useState<Song>();
  useEffect(()=> {
    connection().then((res)=> {setSong(res)})
  },[])
  return (
      <div>
        <LoginSignup />
      </div>
  )
}

export default App;
