import React from "react";
import "../../App.css";
import { Card, Img_Logo } from "../CadastroSenha/style";
import Logo1 from "../../Logo1.png";

export default function CadastroSenha() {
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
          <h1>Senha</h1>
        </div>
      </div>
    </Card>
  );
}
