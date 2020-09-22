import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p>Know Gadget</p>
      <p>{props.user}</p>
    </div>
  );
};

export default Header;
