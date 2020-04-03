import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import RecipeListing from './RecipeListing';
import BreakingBad from './BreakingBad';
import BreakingBadCharacter from './BreakingBadCharacter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route
            path={`${process.env.PUBLIC_URL}/about`}
            exact
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/breaking-bad`}
            exact
            component={BreakingBad}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/breaking-bad/:id`}
            exact
            component={BreakingBadCharacter}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/recipe-listing`}
            exact
            component={RecipeListing}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
