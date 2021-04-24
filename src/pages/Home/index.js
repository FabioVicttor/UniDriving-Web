import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import { useOnClickOutside } from "./hooks";

import Menu from "./components/menu/Menu/menu";
import { AppBackgroundHome, Content } from "./style";

import Burger from "./components/menu/Burger/Burger";

import Anuncios from "./components/anuncios/index";
import Perfil from "./components/perfil/index";

import { ThemeProvider } from "styled-components";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [themes, setThemes] = useState(false);
  const { path, url } = useRouteMatch();

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const theme = {
    background: themes === true ? 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)' : 'linear-gradient(30deg, #009efa, #2c73d2, #4ffbdf)',
    backgroundCard: themes === true ? 'rgb(40 40 40)' : 'white',
    itemPerfil: themes === true ?  'white' : 'black',
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBackgroundHome>
        <Router>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen}></Burger>
            <Menu
              open={open}
              setOpens={setOpen}
              themes={themes}
              setThemes={setThemes}
              url={url}
            ></Menu>
          </div>

          <Content>
            <Switch>
              <Route path={`${path}/anuncios`} component={Anuncios} />
              <Route path={`${path}/perfil`} component={Perfil} />
            </Switch>
          </Content>
        </Router>
      </AppBackgroundHome>
    </ThemeProvider>
  );
}
