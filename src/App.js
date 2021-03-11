import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/Nomatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/detail/:idTeam">
            <TeamDetails></TeamDetails>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
