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
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/breaking-bad' exact component={BreakingBad} />
          <Route
            path='/breaking-bad/:id'
            exact
            component={BreakingBadCharacter}
          />
          <Route path='/recipe-listing' exact component={RecipeListing} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
