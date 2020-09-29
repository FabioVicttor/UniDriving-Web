import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ReactDOM from 'react-dom';
import '../../App.css';
import { Card, Img_Logo } from "./style"

import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

import Logo1 from '../../Logo1.png'

import '@progress/kendo-theme-default/dist/all.css';

export default function Login() {

  const [email, setEmail] = React.useState();

  const [senha, setSenha] = React.useState();

  return (

    <Card>
      <div>
        <div className="DivLogo">
          <Img_Logo src={Logo1} />
        </div>

        <div style={{ padding: "5%" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

            <FloatingLabel label={'E-Mail/Celular:'} editorId={'E-Mail/Celular'} editorValue={email} style={{ width: "75%" }}>
              <Input
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                id={'E-Mail/Celular'}
                value={email}
                onChange={(e) => setEmail(e.email)}
              />
            </FloatingLabel>

          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
            <FloatingLabel label={'Senha:'} editorId={'Senha'} editorValue={senha} style={{ width: "75%" }}>
              <Input
                type="password"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                id={'Senha'}
                value={senha}
                onChange={(e) => setSenha(e.senha)}
              />
            </FloatingLabel>
          </div>

        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
          <Button primary={true} style={{ backgroundColor: "#2C73D2", borderColor: "#2C73D2", width: "60%", fontWeight: "bold" }}>
            Entrar
          </Button>
        </div>

        <div id="footer">

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10%", color: "#2C73D2" }}>
            <div className="linha"></div>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>OU</div>
              <div>Entar Com</div>
            </div>
            <div className="linha"></div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center", color: "#2C73D2" }}>

            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", padding: "2%", marginTop: "5%" }}>
              <Button ><span style={{ padding: "2%", color: "#3b5998" }} class="k-icon k-i-facebook-box"></span> Facebook </Button>
              <Button ><span style={{ padding: "2%", color: "#db4a39" }} class="k-icon k-i-google-box"></span> Google </Button>
            </div>
          </div>

          <div >
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
              <p><a href="" style={{ textDecoration: "none", color: "#00d2fc", fontWeight: "bold" }}>Esqueceu a Senha?</a></p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>Não tem uma Conta? <Link to="/Cadastro" style={{ textDecoration: "none", color: "#00d2fc", fontWeight: "bold" }}>Cadastre-se</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}


