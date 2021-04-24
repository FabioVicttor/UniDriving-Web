import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import Logo1 from "../../assets/LogoSemFundo.png";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

import Notificacao from "../../components/notification";

import { Card, ImgLogo } from "./style";

export default function Login() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [menssage, setMenssage] = React.useState("E-Mail/Senha incorreto.");

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (dataItem) => {
      try {
        await signIn(dataItem);
      } catch (error) {
        setMenssage("E-Mail/Senha incorreto.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      }
    },
    [signIn]
  );

  return (
    <div className="App-background">
      <Card>
        <div>
          <div className="DivLogo">
            <ImgLogo src={Logo1} />
          </div>
          <div style={{ padding: "5%" }}>
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement style={{ maxWidth: 650 }}>
                  <fieldset className={"k-form-fieldset"}>
                    <div>
                      <div className="mb-3">
                        <Field
                          name={"email"}
                          type={"email"}
                          component={EmailInput}
                          label={"E-mail:"}
                          validator={emailValidator}
                        />
                      </div>

                      <div className="mb-3">
                        <Field
                          name={"password"}
                          component={Input}
                          label={"Senha:"}
                          type="password"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5%",
                        width: "100%",
                      }}
                    >
                      <Button
                        type={"submit"}
                        disabled={!formRenderProps.allowSubmit}
                        primary={true}
                        style={{
                          backgroundColor: "#2C73D2",
                          borderColor: "#2C73D2",
                          width: "75%",
                          fontWeight: "bold",
                        }}
                      >
                        Entrar
                      </Button>
                    </div>
                  </div>
                </FormElement>
              )}
            />
          </div>
          <div id="footer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
                color: "#2C73D2",
              }}
            >
              <div className="linha"></div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  OU
                </div>
                <div>Entar Com</div>
              </div>
              <div className="linha"></div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#2C73D2",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "2%",
                  marginTop: "5%",
                }}
              >
                <Button>
                  <span
                    style={{ padding: "2%", color: "#3b5998" }}
                    className="k-icon k-i-facebook-box"
                  ></span>{" "}
                  Facebook{" "}
                </Button>
                <Button>
                  <span
                    style={{ padding: "2%", color: "#db4a39" }}
                    className="k-icon k-i-google-box"
                  ></span>{" "}
                  Google{" "}
                </Button>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5%",
                }}
              >
                <p>
                  <Link
                    to="/recuperar_senha"
                    style={{
                      textDecoration: "none",
                      color: "#00d2fc",
                      fontWeight: "bold",
                    }}
                  >
                    Esqueceu a Senha?
                  </Link>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                  Não tem uma Conta?{" "}
                  <Link
                    to="/cadastro"
                    style={{
                      textDecoration: "none",
                      color: "#00d2fc",
                      fontWeight: "bold",
                    }}
                  >
                    Cadastre-se
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Notificacao
        success={success}
        setSuccess={setSuccess}
        error={error}
        setError={setError}
        menssage={menssage}
      />
    </div>
  );
}

//Validação e-mail - Inicio
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => {
  return emailRegex.test(value) ? "" : "Por favor, informe um e-mail válido.";
}
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};
//Validação e-mail - Fim
