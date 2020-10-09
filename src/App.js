import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import AppProvider from './hooks';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Login from "./pages/Login/index";
import Cadastro from "./pages/Cadastro";
import CadastroSenha from "./pages/CadastroSenha";
import RecuperarSenha from "./pages/RecuperarSenha";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <AppProvider>
        <AppAnimation />
      </AppProvider>
    </Router>
  );
}

function AppAnimation() {
  let location = useLocation();
  return (
    <TransitionGroup >
      <CSSTransition key={location.key} classNames="fade-enter" timeout={300}>
        <Switch location={location}>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Home  />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/CadastroSenha">
            <CadastroSenha />
          </Route>
          <Route path="/RecuperarSenha">
            <RecuperarSenha />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}