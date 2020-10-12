import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'
 import { Home } from './pages'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App;
