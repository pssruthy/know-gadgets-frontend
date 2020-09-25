import React, { useEffect, useState } from 'react';
import Api from '../Api';
import Logo from './Logo';

const Login = () => {
  const [authLink, setAuthLink] = useState('');

  useEffect(() => {
    Api.getAuthLink().then(setAuthLink);
  }, []);

  return (
    <div className="login">
      <Logo />
      <a href={authLink}>
        <div className="login-with">Login with github</div>
      </a>
    </div>
  );
};

export default Login;
