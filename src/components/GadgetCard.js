import React from 'react';

const GadgetCard = (props) => {
  return (
    <div className="gadget-card">
      <div>
        {props.details.manufacturer} {props.details.gadget}{' '}
        {props.details.model}
      </div>
      <div>{'4 * 10 Rate & Reviews'}</div>
    </div>
  );
};

export default GadgetCard;
