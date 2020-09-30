import React, { useState, useEffect } from 'react';
import Api from '../Api';
import GadgetList from './GadgetList';

const TrendingList = (props) => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    Api.getGadgets().then(setGadgets);
  }, []);

  const trendingList = gadgets.sort(
    (details1, details2) => details2.rate - details1.rate
  );

  return <GadgetList gadgets={trendingList} />;
};

export default TrendingList;
