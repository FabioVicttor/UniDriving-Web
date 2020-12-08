import React from "react";
import api from "../../../../services/api";
import { useAuth } from "../../../../hooks/auth";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
// import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

import Notificacao from "../../../../components/notification";

export default function Novo_Anuncio() {
  const { token } = useAuth();

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [menssage, setMenssage] = React.useState("Erro ao cadastrar Anúncio");

  const handleSubmit = async (dataItem) => {
    try {
      api.post("announcements", dataItem, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMenssage("Anúncio Cadastrado");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setMenssage("Erro ao Cadastrar Anúncio");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };
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
                      name={"title"}
                      type={"titulo"}
                      component={Input}
                      label={"Titulo:"}
                    />
                  </div>

                  <div className="mb-3" style={{ marginTop: "10px" }}>
                    <Field
                      name={"destiny"}
                      component={Input}
                      label={"Instituição de Ensino:"}
                      type={"instensino"}
                    />
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <Field
                      name={"description"}
                      component={Input}
                      label={"Descrição:"}
                      type={"description"}
                    />
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
