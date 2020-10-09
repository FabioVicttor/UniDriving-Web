import React, { useCallback } from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

import api from '../../services/api';

import Logo1 from "../../assets/Logo1.png";

import "./style.css";

import { Card, ImgLogo } from "./style";

export default function Cadastro() {
  const handleSubmit = useCallback(async (dataItem) => {
    const response = await api.post('users', {dataItem});

    console.log(response.data);
  }, []);

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
            <h1>Cadastro</h1>
          </div>

          <div style={{ padding: "5%" }}>
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement>
                  <fieldset className={"k-form-fieldset"}>
                    <div className={"form_cadastro"}>
                      <div>
                        <div className="mb-3">
                          <Field
                            name={"name"}
                            component={Input}
                            label={"Nome Completo:"}
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            name={"cpf"}
                            component={Input}
                            label={"CPF:"}
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            name={"cnh"}
                            component={Input}
                            label={"CNH:"}
                          />
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
                            name={"cellphone"}
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
                      Avançar
                    </Button>
                  </div>
                </FormElement>
              )}
            />
          </div>
        </div>
      </Card>
    </div>
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
