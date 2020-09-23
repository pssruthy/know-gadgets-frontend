import React from 'react';

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

export default RatingDetails;
