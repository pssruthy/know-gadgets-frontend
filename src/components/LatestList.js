import React, { useState, useEffect } from 'react';
import Api from '../Api';
import GadgetList from './GadgetList';

const LatestList = (props) => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    Api.getGadgets().then(setGadgets);
  }, []);

  return <GadgetList gadgets={gadgets} />;
};

export default LatestList;
