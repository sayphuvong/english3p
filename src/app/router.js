import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from '../containers/home';
// import GamePage from '../containers/game-page';

const Router = props => {
  return (
    <BrowserRouter>
      <Switch location={props.location}>
        {/* Put router here! */}
        <Route path="/" component={Home} />
        {/* <Route path="/game-page" component={GamePage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
