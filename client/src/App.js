import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink, useHistory, Redirect} from 'react-router-dom'
import Login from './component/auth/Login';
import Home from './component/Ui/Home';
import Register from './component/auth/Register';

function App() {
  return (
    <Router>
      <Switch>

      <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/register">
          <Register/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
