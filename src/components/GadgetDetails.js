import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../Api';

const GadgetDetails = (props) => {
  const { id } = useParams();
  return (
    <div>
      <div>JBL headphone 1234</div>
    </div>
  );
};

export default GadgetDetails;
