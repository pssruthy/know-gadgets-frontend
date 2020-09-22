import React, { useState } from 'react';
import './App.css';
import Api from './Api';

function App() {
  Api.getMessage().then((message) => {
    console.log(message);
  });
  return <div className="App"> Hai</div>;
}

export default App;
