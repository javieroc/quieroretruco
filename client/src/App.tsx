import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'
 import { Home, Game } from './pages'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </Router>
  )
}

export default App;
