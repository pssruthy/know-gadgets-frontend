import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import GadgetList from './GadgetList';
import Header from './Header';
import GadgetDetails from './GadgetDetails';
import AskForReview from './AskForReview';
import Api from '../Api';
import './style.css';
import Login from './Login';

const Home = () => {
  const [user, setUser] = useState(undefined);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    Api.getUser().then((details) => {
      setUser(details.user);
      setAvatar(details.avatar_url);
    });
  }, []);

  return !user ? (
    <Login />
  ) : (
    <div>
      <Header user={user} avatar={avatar} />
      <div style={{ marginTop: '130px' }}>
        <NavLink to="/latest" activeClassName="active-link">
          Latest
        </NavLink>
        <NavLink to="/trending" activeClassName="active-link">
          Trending
        </NavLink>
        <NavLink to="/askForReview" activeClassName="active-link">
          Ask for review
        </NavLink>
      </div>
      <Switch>
        <Route path="/gadget/:id" children={<GadgetDetails />} />
        <Route path="/askForReview" children={<AskForReview />} />
        <Route exact path="/latest" children={<GadgetList />} />
        <Route
          exact
          path="/trending"
          children={
            <GadgetList
              sorter={(details1, details2) => details2.rate - details1.rate}
            />
          }
        />
        <Route exact path="/">
          <div>Welcome to know gadget</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
