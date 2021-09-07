import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Hello from './pages/Hello/Hello';
import Base from './pages/Base/Base';
import { QueryClientProvider } from 'react-query';
import queryClient from './core/config/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
