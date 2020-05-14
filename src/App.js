import React from 'react';
import { LandingPage, AccountPage, MatchingInterface } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/connect" component={MatchingInterface} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
