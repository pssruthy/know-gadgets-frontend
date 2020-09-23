import React from 'react';

const Heading = ({ manufacturer, gadget, model }) => {
  return (
    <div className="heading">
      {manufacturer} {gadget} {model}
    </div>
  );
};

export default Heading;
