import React from 'react';
import { verificaAutenticacao } from './services/usuario';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        verificaAutenticacao() ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          )
      }
    />
  );
};
const PublicRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        verificaAutenticacao() ? (
          <Redirect to={{ pathname: '/Home', state: { from: props.location } }} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};
const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <PublicRoute component={Login} path="/" exact />
        <PublicRoute component={Login} path="/Login" />
        <PublicRoute component={Home} path="/Home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
