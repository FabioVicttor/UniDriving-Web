import React from "react";

import { Card, ImgLogo } from "../RecuperarSenha/style";
import Logo1 from "../../assets/Logo1.png";

export default function RecuperarSenha() {
  return (
    <div className="App-background">
      <Card>
        <div style={{ width: "100%" }}>
          <div className="DivLogo">
            <ImgLogo src={Logo1} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Recuperar Senha</h1>
          </div>
        </div>
      </Card>
    </div>
  );
}
