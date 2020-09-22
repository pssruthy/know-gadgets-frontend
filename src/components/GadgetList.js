import React from 'react';
import GadgetCard from './GadgetCard';

const GadgetList = (props) => {
  const gadgets = props.gadgets.map((gadget) => (
    <GadgetCard details={gadget} key={gadget.id} />
  ));
  return <div className="gadget-list">{gadgets}</div>;
};

export default GadgetList;
