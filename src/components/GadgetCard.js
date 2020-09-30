import React from 'react';
import Heading from './Heading';
import RatingDetails from './RatingDetails';
import GadgetImg from './GadgetImg';

const GadgetCard = (props) => {
  const {
    manufacturer,
    gadget,
    model,
    rate,
    ratingCount,
    imgUrl,
  } = props.details;
  return (
    <div className="gadget-card">
      <Heading manufacturer={manufacturer} gadget={gadget} model={model} />
      <GadgetImg imgUrl={imgUrl} gadget={gadget} />
      <RatingDetails rating={rate} ratingCount={ratingCount} />
    </div>
  );
};

export default GadgetCard;
