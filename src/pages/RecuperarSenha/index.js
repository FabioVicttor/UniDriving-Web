import React from "react";

import "../../App.css";
import { Card, Img_Logo } from "../RecuperarSenha/style";
import Logo1 from "../../Logo1.png";

export default function RecuperarSenha() {
  return (
    <Card>
      <div style={{ width: "100%" }}>
        <div className="DivLogo">
          <Img_Logo src={Logo1} />
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
  );
}
