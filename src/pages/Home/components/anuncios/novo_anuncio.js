import React, { useCallback } from "react";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
// import { Error } from "@progress/kendo-react-labels";
import { Input, TextArea } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

import Notificacao from "../../../../components/notification";

export default function Novo_Anuncio() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [menssage, setMenssage] = React.useState("Erro ao cadastrar Anúncio");

  const handleSubmit = useCallback(async (dataItem) => {
    try {
      setMenssage("Anúncio Cadastrado");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      await console.log(dataItem);
    } catch (error) {
      setMenssage("Erro ao Cadastrar Anúncio");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  });
  return (
    <div>
      <div style={{ padding: "10%" }}>
        <Form
          onSubmit={handleSubmit}
          render={(formRenderProps) => (
            <FormElement>
              <fieldset className={"k-form-fieldset"}>
                <div>
                  <div className="mb-3">
                    <Field
                      name={"titulo"}
                      type={"titulo"}
                      component={Input}
                      label={"Titulo:"}
                    />
                  </div>

                  <div className="mb-3" style={{ marginTop: "10px" }}>
                    <Field
                      name={"instensino"}
                      component={Input}
                      label={"Instituição de Ensino:"}
                      type={"instensino"}
                    />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <label>Descição:</label>
                    <Field name={"desc"} component={TextArea} type={"desc"} />
                  </div>
                </div>
              </fieldset>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "150px",
                }}
              >
                <Button
                  type={"submit"}
                  disabled={!formRenderProps.allowSubmit}
                  primary={true}
                  style={{
                    backgroundColor: "#2C73D2",
                    borderColor: "#2C73D2",
                    width: "200px",
                    fontWeight: "bold",
                  }}
                >
                  Confirmar
                </Button>
              </div>
            </FormElement>
          )}
        />
      </div>
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
