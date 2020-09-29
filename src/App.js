import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro";

import { Input } from '@progress/kendo-react-inputs';

import '@progress/kendo-theme-default/dist/all.css';

function App() {

  return (
    <div>
      <Router>
        <AppAnimation />
      </Router>
    </div>
  );
}

function AppAnimation() {
  let location = useLocation();
  return (
    <TransitionGroup className="App-background">
      <CSSTransition
        key={location.key}
        classNames="fade-enter"
        timeout={300}
      >
        <Switch location={location}>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/cadastro'>
            <Cadastro />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
export default App;
