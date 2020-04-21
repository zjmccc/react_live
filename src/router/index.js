import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/index/index';
import Login from '../pages/user/login/login';
import Add from '../pages/user/add/add';
import Home from '../pages/home/home';
import HomeIndex from '../pages/home/homeIndex';
import Liveing from '../pages/liveing/liveing';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add" component={Add} />
      <Route path="/home" component={() => (
        <Home>
          <Route exact path="/home/HomeIndex" component={HomeIndex} />
          <Route exact path="/home/liveing" component={Liveing} />
        </Home>
      )} >
      </Route>
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;