import React from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../Api';
import Logo from './Logo';

const Header = (props) => {
  const history = useHistory();

  const handleOnclick = () => {
    Api.logout().then(() => history.push('/login'));
  };

  return (
    <div className="header">
      <Logo />
      <div style={{ display: 'flex' }}>
        <div className="user-details">
          <img alt="user" src={props.avatar}></img>
          <p>{props.user}</p>
        </div>
        <div className="logout" onClick={handleOnclick}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Header;
