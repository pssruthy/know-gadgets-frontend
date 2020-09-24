import React, { useEffect, useState } from 'react';
import Api from '../Api';

const Login = () => {
  const [authLink, setAuthLink] = useState('');

  useEffect(() => {
    Api.getAuthLink().then(setAuthLink);
  }, []);

  return <a href={authLink}>Login with github</a>;
};

export default Login;
