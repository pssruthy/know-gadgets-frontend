import React, { useState, useEffect } from 'react';
import GadgetList from './GadgetList';
import Header from './Header';
import './style.css';
import Api from '../Api';

const user = 'sruthy';

const Home = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    Api.getGadgets().then(setGadgets);
  }, []);

  return (
    <div>
      <Header user={user} />
      <GadgetList gadgets={gadgets} />
    </div>
  );
};

export default Home;
