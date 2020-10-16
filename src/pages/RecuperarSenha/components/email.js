import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput } from "../../../components/formComponents.js";

import { emailValidator } from "../../../utils/validators.js";

export const DadosContatoRec = (
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
  </div>
);
