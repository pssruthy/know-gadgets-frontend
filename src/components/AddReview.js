import React, { useState } from 'react';
import RatingStar from './RatingStar';

const AddReview = (props) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleOnclick = () => {
    setRating(0);
    setReview('');
    props.addReview(rating, review);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>Add your review</p>
      <RatingStar
        value={rating}
        count={5}
        size={25}
        onChange={setRating}
        activeColor="green"
        edit={true}
      />
      <textarea
        className="text-area"
        rows="4"
        cols="10"
        value={review}
        onChange={({ target }) => setReview(target.value)}
      />
      <button className="add-btn" onClick={handleOnclick}>
        Add review
      </button>
    </div>
  );
};

export default AddReview;
