import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import DisplayCharacterDetail from '../containers/DisplayCharacterDetail';
import SwansonQuotes from '../containers/SwansonQuotes';
import SimpsonsQuotes from '../containers/SimpsonsQuotes';
import NotFound from '../components/NotFound';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/characters/:id" component={DisplayCharacterDetail} />
        <Route path="/quote" component={SwansonQuotes} />
        <Route path="/simpsons" component={SimpsonsQuotes} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}
