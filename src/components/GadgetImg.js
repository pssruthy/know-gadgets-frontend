import React from 'react';

const GadgetImg = (props) => {
  return <img className="gadget-img" alt={props.gadget} src={props.imgUrl} />;
};

export default GadgetImg;
