import React from 'react';
import { Link } from 'react-router-dom';
import GadgetCard from './GadgetCard';

const GadgetList = ({ gadgets }) => {
  const gadgetsGallery = gadgets.map((gadget) => (
    <Link to={`/gadget/${gadget.id}`} key={gadget.id}>
      <GadgetCard details={gadget} />
    </Link>
  ));
  return <div className="gadget-list">{gadgetsGallery}</div>;
};

export default GadgetList;
