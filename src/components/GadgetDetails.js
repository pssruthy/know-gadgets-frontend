import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heading from './Heading';
import RatingDetails from './RatingDetails';
import GadgetImg from './GadgetImg';
import Api from '../Api';
import RatingCount from './RatingCount';
import AddReview from './AddReview';

const GadgetDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoaded, setStatus] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Api.getGadgetDetails(id).then((details) => {
      setDetails(details);
      Api.getReviews(id).then((details) => {
        setReviews(details);
      });
      setStatus(true);
    });
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const addReview = (rating, review) =>
    Api.addReview({ id, rating, review }).then(() =>
      Api.getReviews(id).then(setReviews)
    );
  const reviewList = reviews.map((review) => {
    return (
      <div className="rating-and-review-care" key={review.id}>
        <div className="user-name">{review.user}</div>
        <RatingCount rating={review.rating} />
        <div>{review.review} </div>
      </div>
    );
  });

  const { manufacturer, gadget, model, imgUrl, rate, ratingCount } = details;
  return (
    <div className="gadget-container">
      <div className="gadget-details">
        <Heading manufacturer={manufacturer} gadget={gadget} model={model} />
        <GadgetImg imgUrl={imgUrl} gadget={gadget} />
        <RatingDetails rate={rate} ratingCount={ratingCount} />{' '}
      </div>
      <AddReview id={id} addReview={addReview} />
      <div className="reviews">{reviewList}</div>
    </div>
  );
};

export default GadgetDetails;
