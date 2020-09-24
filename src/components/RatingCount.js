import React from 'react';
import RatingStar from './RatingStar';

const RatingCount = (props) => {
  return (
    <div className="rating">
      {props.rating}
      <RatingStar
        count={1}
        size={18}
        onChange={() => {}}
        activeColor="white"
        value={1}
        edit={false}
      />
    </div>
  );
};

export default RatingCount;
