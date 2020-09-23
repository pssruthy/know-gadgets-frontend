import React from 'react';

const Heading = ({ manufacturer, gadget, model }) => {
  return (
    <div>
      {manufacturer} {gadget} {model}
    </div>
  );
};

export default Heading;
