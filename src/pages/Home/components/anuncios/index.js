import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import Anuncio_sub from "./anuncios";
import Meus_Anuncios_sub from "./meus_anuncios";
import Novo_Anuncio from "./novo_anuncio";

import { Card, Container, ButtonMenu } from "./style";

export default function Anuncios() {
  const { path, url } = useRouteMatch();
  return (
    <Card>
      <div
        style={{
          display: "inline-flex",
          justifyContent: "space-evenly",
          width: "100%",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <Link
          to={`${url}/todos_anuncios`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <ButtonMenu style={{ borderTopLeftRadius: "30px" }}>
            Anuncios
          </ButtonMenu>
        </Link>
        <Link
          to={`${url}/meus_anuncios`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <ButtonMenu>Meus Anuncios</ButtonMenu>
        </Link>
        <Link
          to={`${url}/novo_anuncio`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <ButtonMenu style={{ borderTopRightRadius: "30px" }}>
            Novo Anuncio
          </ButtonMenu>
        </Link>
      </div>
      <Container className="scrollbar" id="style-5">
        <Switch>
          <Route path={`${path}/todos_anuncios`} component={Anuncio_sub} />
          <Route path={`${path}/meus_anuncios`} component={Meus_Anuncios_sub} />
          <Route path={`${path}/novo_anuncio`} component={Novo_Anuncio} />
        </Switch>
      </Container>
    </Card>
  );
}
