import React from 'react'
import { Switch, Route, matchPath } from 'react-router'
import Home from './scenes/Home'
import Resume from './scenes/Resume'
import Fun from './scenes/Fun'
import NotFound from './scenes/NotFound'
import {
  loadResume,
  loadHome,
  loadFun,
} from './services/loaders'

const noop = () => undefined

// Route definitions
const HOME = {
  exact: true,
  path: '/',
}

const RESUME = {
  path: '/resume',
}

const FUN = {
  path: '/fun',
}

// This is a very unsophisticated data loader
// as you add more routes check out static resolvers like
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// We wrote our own that accepts an array like [[ROUTE, loaderMethod], [OTHER_ROUTE, otherLoaderMethod]]
export const loadDataForLocation = prevLocation => async (
  dispatch,
  getState,
  extras,
) => {
  const { history } = extras
  const { location } = history

  if (prevLocation && prevLocation.pathname === location.pathname) {
    return noop;
  }

  if (matchPath(location.pathname, HOME)) {
    return dispatch(loadHome())
  }
  if (matchPath(location.pathname, RESUME)) {
    return dispatch(loadResume())
  }
  if (matchPath(location.pathname, FUN)) {
    return dispatch(loadFun())
  }

  return noop
}

// These are our actual routes
const Routes = () => (
  <Switch>
    <Route {...HOME} component={Home} />
    <Route {...RESUME} component={Resume} />
    <Route {...FUN} component={Fun} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
