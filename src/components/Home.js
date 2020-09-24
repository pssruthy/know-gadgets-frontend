import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import GadgetList from './GadgetList';
import Header from './Header';
import GadgetDetails from './GadgetDetails';
import AskForReview from './AskForReview';
import './style.css';

const user = 'sruthy';

const Home = () => {
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
      </Switch>
    </div>
  );
};

export default Home;
