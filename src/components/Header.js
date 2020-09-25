import React from 'react';
import Api from '../Api';

const Header = (props) => {
  return (
    <div className="header">
      <div style={{ display: 'flex' }}>
        <img className="logo" alt="logo" src="/logo.png" />
        <p className="app-name">Know Gadgets</p>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="user-details">
          <img alt="user" src={props.avatar}></img>
          <p>{props.user}</p>
        </div>
        <div className="logout">Logout</div>
      </div>
    </div>
  );
};

export default Header;
