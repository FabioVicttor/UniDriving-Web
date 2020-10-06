import React from 'react';
import { Card, Img_Logo } from "./style"
import Logo1 from '../../assets/Logo1.png';

import { FloatingLabel } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';

export default function Cadastro() {
  const [nome, setNome] = React.useState();
  const [cpf, setCpf] = React.useState();
  const [cnh, setCnh] = React.useState();
  const [email, setEmail] = React.useState();
  const [celular, setCelular] = React.useState();
  const [universidade, setUniversidade] = React.useState();

  return (
    <Card>
      <div style={{ width: "100%" }}>
        <div className="DivLogo">
          <Img_Logo src={Logo1} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h1>Cadastro</h1>
        </div>

        <div style={{ padding: "5%" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'Nome Completo:'} editorId={'Nome Completo'} editorValue={nome} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'Nome Completo'}
                      value={nome}
                      onChange={(e) => setNome(e.nome)}
                    />
                  </FloatingLabel>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'CPF:'} editorId={'CPF'} editorValue={cpf} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'CPF'}
                      value={cpf}
                      onChange={(e) => setCpf(e.cpf)}
                    />
                  </FloatingLabel>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'CNH:'} editorId={'CNH'} editorValue={cnh} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'CNH'}
                      value={cnh}
                      onChange={(e) => setCnh(e.cnh)}
                    />
                  </FloatingLabel>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'E-Mail:'} editorId={'E-Mail'} editorValue={email} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'E-Mail'}
                      value={email}
                      onChange={(e) => setEmail(e.email)}
                    />
                  </FloatingLabel>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'Celular:'} editorId={'Celular'} editorValue={celular} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'Celular'}
                      value={celular}
                      onChange={(e) => setCelular(e.celular)}
                    />
                  </FloatingLabel>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <FloatingLabel label={'Univerisade:'} editorId={'Univerisade'} editorValue={universidade} style={{ width: "100%" }}>
                    <Input
                      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      id={'Universidade'}
                      value={universidade}
                      onChange={(e) => setUniversidade(e.universidade)}
                    />
                  </FloatingLabel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}


