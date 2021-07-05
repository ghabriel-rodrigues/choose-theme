import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes, strings } from '../ts/constants';

const Home = React.lazy(() => import('../pages/Home'));
const Create = React.lazy(() => import('../pages/Create'));
const Edit = React.lazy(() => import('../pages/Edit'));

function PublicRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={routes.createTheme} component={Create} />
        <Route path={routes.editTheme} component={Edit} />
        <Route path={routes.home} component={Home} />
      </Switch>
    </Router>
  )
}

function AppRouter() {
  return (
    <Suspense fallback={<div>{strings.LOADING}...</div>}>
      <PublicRoutes />
    </Suspense>
  )
}

export default AppRouter;