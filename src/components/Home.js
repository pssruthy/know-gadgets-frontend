import React, { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Header from './Header';
import GadgetDetails from './GadgetDetails';
import AskForReview from './AskForReview';
import TrendingList from './TrendingList';
import LatestList from './LatestList';
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
      <div
        style={{
          marginTop: '130px',
        }}
      >
        <NavLink
          to="/latest"
          className="nav-link"
          activeClassName="active-link"
        >
          Latest
        </NavLink>
        <NavLink
          to="/trending"
          className="nav-link"
          activeClassName="active-link"
        >
          Trending
        </NavLink>
        <NavLink
          to="/askForReview"
          className="nav-link"
          activeClassName="active-link"
        >
          Ask for review
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/gadget/:id" children={<GadgetDetails />} />
        <Route exact path="/askForReview" children={<AskForReview />} />
        <Route exact path="/latest" children={<LatestList />} />
        <Route exact path="/trending" children={<TrendingList />} />
        <Route exact path="/">
          <div className="welcome">Welcome to know gadget</div>
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
