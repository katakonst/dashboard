import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ProxyPage from "./containers/ProxyPage";
import ReqDetailPage from "./containers/ReqDetailPage";



export default () => (
  <App>

    <Switch>
      <Route path={routes.REQDETAIL} component={ReqDetailPage} />
      <Route path={routes.PROXY} component={ProxyPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
