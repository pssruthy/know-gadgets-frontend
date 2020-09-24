import React from 'react';
import RatingCount from './RatingCount';

const RatingDetails = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <RatingCount rating={props.rate}></RatingCount>
      <div>
        {props.ratingCount} {'Rate & Review'}
      </div>
    </div>
  );
};

export default RatingDetails;
