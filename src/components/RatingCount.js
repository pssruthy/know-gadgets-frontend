import React from 'react';
import StarRatings from 'react-rating-stars-component';

const RatingCount = (props) => {
  return (
    <div className="rating">
      {props.rating}
      <StarRatings
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
