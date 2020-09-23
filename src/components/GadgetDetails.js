import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heading from './Heading';
import RatingDetails from './RatingDetails';
import GadgetImg from './GadgetImg';
import Api from '../Api';

const GadgetDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isLoaded, setStatus] = useState(false);

  useEffect(() => {
    Api.getGadgetDetails(id).then((details) => {
      setDetails(details);
      setStatus(true);
    });
  }, [id]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const { manufacturer, gadget, model, imgUrl, rate, ratingCount } = details;
  return (
    <div className="gadget-details">
      <Heading manufacturer={manufacturer} gadget={gadget} model={model} />
      <GadgetImg imgUrl={imgUrl} gadget={gadget} />
      <RatingDetails rate={rate} ratingCount={ratingCount} />{' '}
    </div>
  );
};

export default GadgetDetails;
