import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  Burger,
  Menu,
  LandingPage,
  AccountPage,
  MatchingInterface,
  Calendar
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <nav>
      <ThemeProvider theme={theme}>
          Hello
          <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={open} />
          </div>
      </ThemeProvider>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route path="/connect" component={MatchingInterface} />
          <Route exact path='/account/calendar' component={Calendar}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
