import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormMaskedTextBox } from "./formComponents.js";

import { emailValidator, phoneValidator } from "../validators.js";

export const DadosContato = (
  <div>
    <Field
      key={"email"}
      id={"email"}
      name={"email"}
      label={"E-mail:"}
      hint={"Informe o E-mail."}
      type={"email"}
      component={FormInput}
      validator={emailValidator}
    />

    <Field
      key={"cellphone"}
      id={"cellphone"}
      name={"cellphone"}
      label={"Celular:"}
      hint={"informe celular de contato."}
      type={"phone"}
      mask={"(00) 00000-0000"}
      component={FormMaskedTextBox}
      validator={phoneValidator}
    />
  </div>
);
