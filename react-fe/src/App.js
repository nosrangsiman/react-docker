import logo from './logo.svg';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [userName, setUsername] = useState('')
  const [textApi, setTextapi] = useState('')

  useEffect(()=>{
    getNames();
    
  },[])

  useEffect(()=>{
    getText();
    
  },[])

  const getText = async() => {

    const textFetch = await axios.get('/home');
    console.log(textFetch);
    setTextapi(textFetch.data);
  }

  const getNames = async() => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is workshop react-docker-cicd</h1>
        <p>
          by {userName}
        </p>
        <h3>{textApi}</h3>
      </header>
      
    </div>
  );
}

export default App;
