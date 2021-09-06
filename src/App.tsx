import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import Hello from './pages/Hello/Hello';
import Main from './pages/Main/Main';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
      <Menu />
    </Router>
    </div>
  );
}

export default App;
