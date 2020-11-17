import styled from "styled-components";

export const Card = styled.div`
  margin-top: 5%;
  background-color: white;
  height: 75%;
  width: 70%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -8px 8px 20px 5px #0020389e;
  @media (max-width: 799px) {
    box-shadow: -5px 11px 20px 5px #0020389e;
    /* box-shadow: -5px 11px 20px 5px #00000085; */
  }
`;
