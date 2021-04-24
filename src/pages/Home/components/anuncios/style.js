import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  background: ${({ theme }) => theme.backgroundCard};
  width: 70%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: -10px 5px 20px 0px #0020389e;
  @media (max-width: 799px) {
    box-shadow: -10px 5px 20px 0px #0020389e;
  }
`;

export const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  @media (max-width: 799px) {
    height: 500px;
  }
  height: 700px;
  overflow-x: auto;
  align-items: center;
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.backgroundCard};
  transition: 0.3s all ease-in-out;
  position: relative;
  box-shadow: none;
  text-transform: none;
  display: flex;
  padding: 15px;

  h1 {
    font-size: 15px !important;
    color: #8293ff;
    font-weight: bold;
    padding: 10px;
  }

  p {
    color: #8293ff;
    font-size: 15px;
    height: 20%;
  }

  :hover {
    z-index: 99;
    background: linear-gradient(130deg, #503bff 0%, #8293ff 100%);
    box-shadow: 0px 0px 15px background;
    color: white;
    transition: 0.3s all ease-in-out;

    h1 {
      color: white;
      transition: 0.3s all ease-in-out;
    }

    p {
      color: white;
      -webkit-transition: 0.3s all ease-in-out;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  box-shadow: none !important;
  text-transform: none;
  border: none;
  background-color: ${({ theme }) => theme.backgroundCard};
  color: #2c73d2;
  transition: 0.3s all ease-in-out;
  position: relative;
  outline: none !important;
  width: 100%;
  height: 60px;
  font-size: 18px;
  padding: 2%;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    z-index: 99;
    background: linear-gradient(70deg, #009efa 5%, #2c73d2 95%);
    box-shadow: 0px 0px 15px background !important;
    color: white;
  }

  svg {
    fill: #2c73d2;
    transition: 0.3s all ease-in-out;
  }

  :hover svg {
    fill: white;
    transition: 0.3s all ease-in-out;
  }

  :active {
    cursor: progress;
    box-shadow: none !important;
    color: white;
    transition-duration: 0.3s;
    background: radial-gradient(circle, #009efa 100%, #2c73d2 5%) !important;
  }

  :focus {
    color: white;
    transition-duration: 0.3s;
    background: #2c73d26b !important;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  box-shadow: none !important;
  text-transform: none;
  border: none;
  background-color: transparent;
  color: #2c73d2;
  transition: 0.3s all ease-in-out;
  position: relative;
  outline: none !important;
  width: 130px;
  height: 60px;
  font-size: 18px;
  padding: 2%;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    z-index: 99;
    background: linear-gradient(70deg, #ff4040 5%, #ff0000 95%);
    box-shadow: 0px 0px 15px background !important;
    color: white;
  }

  svg {
    fill: #2c73d2;
    transition: 0.3s all ease-in-out;
  }

  :hover svg {
    fill: white;
    transition: 0.3s all ease-in-out;
  }

  :active {
    cursor: progress;
    box-shadow: none !important;
    color: white;
    transition-duration: 0.3s;
    background: radial-gradient(circle, #009efa 100%, #2c73d2 5%) !important;
  }

  :focus {
    color: white;
    transition-duration: 0.3s;
    background: #2c73d26b !important;
  }
`;


export const ButtonAdicar = styled.button`
  cursor: pointer;
  box-shadow: none !important;
  text-transform: none;
  border: none;
  background-color: transparent;
  color: #2c73d2;
  transition: 0.3s all ease-in-out;
  position: relative;
  outline: none !important;
  width: 130px;
  height: 60px;
  font-size: 18px;
  padding: 2%;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    z-index: 99;
    background: linear-gradient(70deg, green 5%, green 95%);
    box-shadow: 0px 0px 15px background !important;
    color: white;
  }

  svg {
    fill: #2c73d2;
    transition: 0.3s all ease-in-out;
  }

  :hover svg {
    fill: white;
    transition: 0.3s all ease-in-out;
  }

  :active {
    cursor: progress;
    box-shadow: none !important;
    color: white;
    transition-duration: 0.3s;
    background: radial-gradient(circle, #009efa 100%, #2c73d2 5%) !important;
  }

  :focus {
    color: white;
    transition-duration: 0.3s;
    background: #2c73d26b !important;
  }
`;
