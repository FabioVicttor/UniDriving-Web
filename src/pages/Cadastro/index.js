import React from "react";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { useHistory } from "react-router-dom";

import Notificacao from "../../components/notification";

import api from "../../services/api";

import Logo1 from "../../assets/Logo1.png";

import "./style.css";

import { Card, ImgLogo } from "./style";

import { DadosPessoais } from "./components/dadospessoais";
import { DadosContato } from "./components/dadoscontato";
import { SenhaForm } from "./components/senha";

const stepPages = [DadosPessoais, DadosContato, SenhaForm];

export default function Cadastro() {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [menssage, setMenssage] = React.useState("Error ao cadastrar.");

  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    { label: "Dados Pessoais", isValid: undefined },
    { label: "Contato", isValid: undefined },
    { label: "Senha", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const history = useHistory();

  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;

      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));

      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        try {
          const response = await api.post("users", values);
          console.log(response);
          setMenssage("Cadastrado com sucesso!");
          setSuccess(true);
          setTimeout(() => {
            history.push("/");
          }, 3000);
        } catch (error) {
          setMenssage("Error ao cadastrar.");
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      }
    },
    [
      step,
      steps,
      setSteps,
      setStep,
      setFormState,
      isLastStep,
      history,
      lastStepIndex,
    ]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );

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

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stepper value={step} items={steps} />
              <Form
                initialValues={formState}
                onSubmitClick={onStepSubmit}
                render={(formRenderProps) => (
                  <div style={{ alignSelf: "center", width: "60%" }}>
                    <FormElement>
                      {stepPages[step]}
                      <span
                        style={{ marginTop: "40px" }}
                        className={"k-form-separator"}
                      />
                      <div
                        style={{
                          justifyContent: "flex-end",
                          alignContent: "center",
                        }}
                        className={"k-form-buttons k-buttons-end"}
                      >
                        <div>
                          {step !== 0 ? (
                            <Button
                              style={{ marginRight: "16px" }}
                              onClick={onPrevClick}
                            >
                              Voltar
                            </Button>
                          ) : undefined}
                          <Button
                            primary={true}
                            disabled={!formRenderProps.allowSubmit}
                            onClick={formRenderProps.onSubmit}
                          >
                            {isLastStep ? "Confirmar" : "Proximo"}
                          </Button>
                        </div>
                      </div>
                    </FormElement>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </Card>
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
