import React, {useState, useEffect} from 'react';

import io from 'socket.io-client'

import './App.css';

const socket = io.connect('http://localhost:3000')

function App() {
  // const {state, setState} = useState({message: '', name: ''})
  // const {chat, setChat} = useState([])
  return (
    <div className="App">

    </div>
  );
}

export default App;
