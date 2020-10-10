import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormMaskedTextBox } from "./formComponents.js";

import { nameValidator, cpfValidator, cnhValidator } from "../validators.js";

export const DadosPessoais = (
  <div>
    <Field
      key={"name"}
      id={"name"}
      name={"name"}
      label={"Nome Completo:"}
      component={FormInput}
      validator={nameValidator}
    />

    <Field
      key={"cpf"}
      id={"cpf"}
      name={"cpf"}
      label={"CPF:"}
      mask={"000.000.000-00"}
      component={FormMaskedTextBox}
      validator={cpfValidator}
    />

    <Field
      key={"cnh"}
      id={"cnh"}
      name={"cnh"}
      label={"CNH:"}
      minLength={11}
      maxLength={11}
      component={FormInput}
      validator={cnhValidator}
    />
  </div>
);
