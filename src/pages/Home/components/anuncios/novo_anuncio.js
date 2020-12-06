import React from "react";

import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

export default function Novo_Anuncio() {
  return (
    <div>
      <div className="force-overflow">
        <div>
          <Form
            // onSubmit={handleSubmit}
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

                    <div className="mb-3">
                      <Field
                        name={"desc"}
                        component={Input}
                        label={"Descrição:"}
                        type={"desc"}
                      />
                    </div>

                    <div className="mb-3">
                      <Field
                        name={"instensino"}
                        component={Input}
                        label={"Instituição de Ensino:"}
                        type={"instensino"}
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
                      // disabled={!formRenderProps.allowSubmit}
                      primary={true}
                      style={{
                        backgroundColor: "#2C73D2",
                        borderColor: "#2C73D2",
                        width: "75%",
                        fontWeight: "bold",
                      }}
                    >
                      Confirmar
                    </Button>
                  </div>
                </div>
              </FormElement>
            )}
          />
        </div>
      </div>
    </div>
  );
}
