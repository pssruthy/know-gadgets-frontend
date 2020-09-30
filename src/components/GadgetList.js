import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GadgetCard from './GadgetCard';
import Api from '../Api';

const GadgetList = ({ sorter }) => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    Api.getGadgets().then(setGadgets);
  }, []);
  const sortedGadgets = gadgets.sort(sorter);

  const gadgetsGallery = sortedGadgets.map((gadget) => (
    <Link to={`/gadget/${gadget.id}`} key={gadget.id}>
      <GadgetCard details={gadget} />
    </Link>
  ));
  return <div className="gadget-list">{gadgetsGallery}</div>;
};

export default GadgetList;
