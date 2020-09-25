import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p>Know Gadget</p>
      <div className="user-details">
        <img alt="user" src={props.avatar}></img>
        <p>{props.user}</p>
      </div>
    </div>
  );
};

export default Header;
