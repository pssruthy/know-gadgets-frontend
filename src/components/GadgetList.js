import React from 'react';
import GadgetCard from './GadgetCard';
import { Link } from 'react-router-dom';

const GadgetList = (props) => {
  const gadgets = props.gadgets.map((gadget) => (
    <Link to={`/gadget/${gadget.id}`} key={gadget.id}>
      <GadgetCard details={gadget} />
    </Link>
  ));
  return <div className="gadget-list">{gadgets}</div>;
};

export default GadgetList;
