import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bomlist from './Components/Bomlist';

import './App.css';

import Bomdetails from './Components/Bomdetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Bomlist} />
        <Route exact path="/:id" component={Bomdetails} />
      </Switch>
    </Router>
  );
}

export default App;
