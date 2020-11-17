import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput } from "../../../components/formComponents.js";

import { passwordValidator } from "../../../utils/validators.js";

export const SenhaForm = (
  <div>
    <Field
      key={"password"}
      id={"password"}
      name={"password"}
      label={"Senha:"}
      type={"password"}
      component={FormInput}
      validator={passwordValidator}
    />
  </div>
);
