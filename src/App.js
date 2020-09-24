import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/" children={<Home />}></Route>
    </Switch>
  );
}

export default App;
