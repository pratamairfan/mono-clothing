import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hatpage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={Hatpage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
