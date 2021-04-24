const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);

export const termsValidator = (value) =>
  value ? "" : "It's required to agree with Terms and Conditions.";
export const emailValidator = (value) => {
  if(!value) {
    return "Campo E-mail é obrigatorio."
  }

  const [ra, dominio] = value.split('@');

  if(ra.length === 7 && dominio === 'escolas.anchieta.br') {
    return '';
  } else {
    return 'Formato de E-mail não válido. Somente permitidos alunos do Anchieta'
  }
}
export const nameValidator = (value) =>
  !value
    ? "Informe o nome completo."
    : value.length < 7
    ? "O nome completo deve ter pelo menos 7 caracteres."
    : "";
export const phoneValidator = (value) =>
  !value
    ? "Campo Celular é obrigatorio."
    : phoneRegex.test(value)
    ? ""
    : "Número não válido.";
export const requiredValidator = (value) =>
  value ? "" : "Error: Este campo é obrigatório.";
export const passwordValidator = (value) =>
  value && value.length > 8 ? "" : "A senha deve ter pelo menos 8 caracteres.";
export const cpfValidator = (value) => {
  if (value !== undefined) {
    value = value.replaceAll("_", "").replaceAll(".", "").replaceAll("-", "");
    if (
      !value ||
      value.length !== 11 ||
      value === "00000000000" ||
      value === "11111111111" ||
      value === "22222222222" ||
      value === "33333333333" ||
      value === "44444444444" ||
      value === "55555555555" ||
      value === "66666666666" ||
      value === "77777777777" ||
      value === "88888888888" ||
      value === "99999999999"
    ) {
      return "CPF inválido.";
    }

    let soma = 0;
    let resto;

    for (var i = 1; i <= 9; i++) {
      soma = soma + parseInt(value.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(value.substring(9, 10))) return "CPF inválido.";
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(value.substring(10, 11))) return "CPF inválido.";
    return "";
  }
};
