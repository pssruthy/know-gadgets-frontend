import React from 'react';
import StarRatings from 'react-rating-stars-component';

const RatingStar = ({ count, size, onChange, activeColor, value, edit }) => {
  return (
    <StarRatings
      count={count}
      size={size}
      onChange={onChange}
      activeColor={activeColor}
      value={value}
      edit={edit}
    />
  );
};

export default RatingStar;
