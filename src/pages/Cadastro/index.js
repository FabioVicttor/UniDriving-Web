import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import { Card, Img_Logo } from "./style";
import Logo1 from "../../Logo1.png";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";



export default function Cadastro() {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

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
          <h1>Cadastro</h1>
        </div>

        <div style={{ padding: "5%" }}>
          <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
              <FormElement>
                <fieldset className={"k-form-fieldset"}>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>
                      <div className="mb-3">
                        <Field
                          name={"nome"}
                          component={Input}
                          label={"Nome Completo:"}
                        />
                      </div>

                      <div className="mb-3">
                        <Field name={"CPF"} component={Input} label={"CPF:"} />
                      </div>

                      <div className="mb-3">
                        <Field name={"CNH"} component={Input} label={"CNH:"} />
                      </div>
                    </div>

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
                          name={"Celular"}
                          component={Input}
                          label={"Celular:"}
                        />
                      </div>
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
                  <Button
                    type={"submit"}
                    disabled={!formRenderProps.allowSubmit}
                    primary={true}
                    style={{
                      backgroundColor: "#2C73D2",
                      borderColor: "#2C73D2",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    <Link to="/CadastroSenha">Avançar</Link>
                  </Button>
                </div>
              </FormElement>
            )}
          />
        </div>
      </div>
    </Card>
  );
}

//Validação e-mail - Inicio
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Por favor, informe um e-mail válido.";
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
