import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import RecuperarSenha from '../pages/RecuperarSenha'
import Home from '../pages/Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/recuperar_senha" component={RecuperarSenha}/>
      <Route path="/home" component={Home} />
    </Switch>
  )
};

export default Routes;
