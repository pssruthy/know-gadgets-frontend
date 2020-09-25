import React from 'react';
import Api from '../Api';
import Logo from './Logo';

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
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
