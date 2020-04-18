import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../pages/index/index';
import Login from '../pages/user/login/login';
import Add from '../pages/user/add/add';
import Home from '../pages/home/home';
import HomeIndex from '../pages/home/homeIndex';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add" component={Add} />
      <Route exact path="/home" render={props => {
        return (
          <Home>
            <Switch>
              <Route exact path="/home/homeIndex" component={HomeIndex} />
            </Switch>
          </Home>
        )
      }
      } />
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;