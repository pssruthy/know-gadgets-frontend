import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <p>Know Gadget</p>
      <div className="user-details">
        <img alt="user" src={props.user.avatar_url}></img>
        <p>{props.user.user}</p>
      </div>
    </div>
  );
};

export default Header;
