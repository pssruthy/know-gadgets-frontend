import React from 'react';

const Logo = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img className="logo" alt="logo" src="/logo.png" />
      <p className="app-name">Know Gadgets</p>
    </div>
  );
};

export default Logo;
