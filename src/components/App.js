import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import DisplayCharacterDetail from '../containers/DisplayCharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/characters/:id" component={DisplayCharacterDetail} />
      </Switch>
    </Router>
  );
}
