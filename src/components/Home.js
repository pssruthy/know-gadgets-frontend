import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import GadgetList from './GadgetList';
import Header from './Header';
import GadgetDetails from './GadgetDetails';
import Api from '../Api';
import './style.css';

const user = 'sruthy';

const Home = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    Api.getGadgets().then(setGadgets);
  }, []);

  return (
    <div>
      <Header user={user} />
      <div style={{ marginTop: '80px' }}>
        <NavLink to="/latest" activeClassName="active-link">
          Latest
        </NavLink>
        <NavLink to="/trending" activeClassName="active-link">
          Trending
        </NavLink>
      </div>
      <Switch>
        <Route path="/gadget/:id" children={<GadgetDetails />} />
        <Route path="/" children={<GadgetList gadgets={gadgets} />} />
      </Switch>
    </div>
  );
};

export default Home;
