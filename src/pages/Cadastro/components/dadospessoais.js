import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput } from "./formComponents.js";

import { nameValidator, cpfValidator } from "../validators.js";

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
      component={FormInput}
      validator={cpfValidator}
    />

    <Field
      key={"cnh"}
      id={"cnh"}
      name={"cnh"}
      label={"CNH:"}
      required={false}
      minLength={11}
      maxLength={11}
      component={FormInput}
    />
  </div>
);
