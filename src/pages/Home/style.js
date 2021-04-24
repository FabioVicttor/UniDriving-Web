import styled from "styled-components";

export const AppBackgroundHome = styled.div`
  background: ${({ theme }) => theme.background};
  /* background: ${({ theme }) => (theme === true ? 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)' : 'linear-gradient(30deg, #009efa, #2c73d2, #4ffbdf)' )}; */
  /* background: linear-gradient(30deg, #009efa, #2c73d2, #4ffbdf); */
  /* background: linear-gradient(30deg, #f5f5f5, #e0e0e0, #fafafa); */
  /* background-color: white; */
  height: 100%;
  width: 100%;
  font-family: "DejaVu Sans", "Arial", sans-serif !important;
`;

export const Content = styled.div`
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  margin-top: 5%;
  background-color: white;
  height: 75%;
  width: 70%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
