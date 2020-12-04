import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  background-color: white;
  /* height: 75%; */
  width: 70%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: -8px 8px 20px 5px #0020389e;
  @media (max-width: 799px) {
    box-shadow: -5px 11px 20px 5px #0020389e;
    /* box-shadow: -5px 11px 20px 5px #00000085; */
  }
`;

export const Container = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 725px;
  overflow-x: auto;
  /* display: inline-flex; */
  /* justify-content: space-evenly; */
  align-items: center;
`;

export const Box = styled.div`
  /* width: 97%; */
  background-color: white;
  transition: 0.3s all ease-in-out;
  position: relative;
  box-shadow: none;
  text-transform: none;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  background-color: white;
  color: #2c73d2;
  transition: 0.3s all ease-in-out;
  position: relative;
  outline: none !important;
  width: 50%;
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
