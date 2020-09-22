import React from 'react';

const Heading = ({ manufacturer, gadget, model }) => {
  return (
    <div>
      {manufacturer} {gadget} {model}
    </div>
  );
};

const RatingDetails = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>{props.rate} *</div>
      <div>
        {props.ratingCount} {'Rate & Review'}
      </div>
    </div>
  );
};

const GadgetImg = (props) => {
  return <img className="gadget-img" src={props.imgUrl} />;
};

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
      <GadgetImg imgUrl={imgUrl} />
      <RatingDetails rate={rate} ratingCount={ratingCount} />
    </div>
  );
};

export default GadgetCard;
