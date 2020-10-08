import React from "react";
import "../../App.css";
import { Card, Img_Logo } from "../CadastroSenha/style";
import Logo1 from "../../Logo1.png";

import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

export default class CadastroSenha extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ success: true });
    setTimeout(() => {
      this.setState({ success: false });
    }, 3000);
  };

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      success: false,
    };
  }
  render() {
    const passwordValidationMessage =
      "Por favor, digite a senha entre 6 e 16 caracteres!";
    const confirmPasswordValidationMessage = "As senhas não correspondem!";
    return (
      <Card>
        <div style={{ width: "100%" }}>
          <div className="DivLogo">
            <Img_Logo src={Logo1} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Cadastro de Senha</h1>
          </div>

          <div style={{ padding: "5%" }}>
            {/*  */}
            <div className="row example-wrapper">
              <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                <div className="card">
                  <div className="card-block">
                    <form className="k-form" onSubmit={this.handleSubmit}>
                      <div
                        className="mb-3"
                        style={{
                          marginTop: "5%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Input
                          validityStyles={false}
                          value={this.state.password}
                          onChange={this.handleChange}
                          name="password"
                          type="password"
                          style={{ width: "50%" }}
                          label="Senha:"
                          required={true}
                          minLength={6}
                          maxLength={18}
                          validationMessage={passwordValidationMessage}
                        />
                      </div>
                      <div
                        className="mb-3"
                        style={{
                          marginTop: "5%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Input
                          validityStyles={false}
                          value={this.state.confirmPassword}
                          onChange={this.handleChange}
                          name="confirmPassword"
                          type="password"
                          style={{ width: "50%" }}
                          label="Confirme a Senha:"
                          valid={
                            this.state.password &&
                            this.state.password === this.state.confirmPassword
                          }
                          minLength={6}
                          maxLength={18}
                          validationMessage={confirmPasswordValidationMessage}
                        />
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          type={"submit"}
                          primary={true}
                          style={{
                            marginTop: "5%",
                            backgroundColor: "#2C73D2",
                            borderColor: "#2C73D2",
                            width: "30%",
                            fontWeight: "bold",
                          }}
                        >
                          Concluir
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* {this.state.success && (
                <div
                  className="alert alert-success"
                  style={{ position: "absolute" }}
                >
                  Form submitted!
                </div>
              )} */}
            </div>
            {/*  */}
          </div>
        </div>
      </Card>
    );
  }
}
