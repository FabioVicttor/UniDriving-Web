import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

import { useOnClickOutside } from "./hooks";

import Menu from "./components/menu/Menu/menu";
import { AppBackgroundHome, Content } from "./style";

import Burger from "./components/menu/Burger/Burger";

import Anuncios from "./components/anuncios/index";
import Perfil from "./components/perfil/index";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { path, url } = useRouteMatch();

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <AppBackgroundHome>
      <Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen} url={url}></Menu>
        </div>

        <Content>
          <Switch>
            <Route path={`${path}/anuncios`} component={Anuncios}  />
            <Route path={`${path}/perfil`} component={Perfil}  />
          </Switch>
        </Content>
      </Router>
    </AppBackgroundHome>
  );
}
