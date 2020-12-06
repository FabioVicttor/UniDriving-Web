import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  background-color: white;
  height: 55%;
  width: 40%;
  border-radius: 30px;
  box-shadow: -10px 5px 20px 0px #0020389e;
  padding: 40px;
  @media (max-width: 799px) {
    min-height: 580px;
    /* width: 50%; */
    box-shadow: -10px 5px 20px 0px #0020389e;
    /* box-shadow: -5px 11px 20px 5px #00000085; */
  }
`;

export const ItemPerfil = styled.div`
  padding: 4px;
  border: 20px;
  display: inline-flex;
  align-items: center;
`;

export const LabelPerfil = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
