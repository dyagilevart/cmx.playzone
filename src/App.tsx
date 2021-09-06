import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Hello from './pages/Hello/Hello';
import Base from './pages/Base/Base';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Hello />
          </Route>
          <Route path="/playzone">
            <Base />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
