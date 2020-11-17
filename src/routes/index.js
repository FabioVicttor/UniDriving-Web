import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

import Route from "./Route";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import RecuperarSenha from "../pages/RecuperarSenha";
import Home from "../pages/Home";

function Routes() {
  let location = useLocation();
  return (
    <PageTransition
      preset="moveToLeftFromRight"
      transitionKey={location.pathname}
    >
      <Switch location={location}>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/recuperar_senha" component={RecuperarSenha} />
        <Route path="/home" component={Home} isPrivate />
      </Switch>
    </PageTransition>
  );
}

export default Routes;
