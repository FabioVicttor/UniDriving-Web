import styled from "styled-components";

export const TopMenu = styled.div`
  @media (min-width: 800px) {
    display: flex;
    width: 100%;
    min-height: 71px;
    background-color: white;
    align-items: center;
    position: absolute;
  }
  display: none;
`;

export const LeftMenu = styled.div`
  @media (max-width: 799px) {
    z-index: 9;
    display: block;
    width: 50%;
    min-width: 250px;
    height: 98%;
    background-color: white;
    align-items: center;
    position: absolute;
    border-bottom-right-radius: 25px;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
  display: none;
`;

export const DivImgLogo = styled.div`
  @media (max-width: 799px) {
    align-items: center;
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: center;
  }
`;

export const ImgLogo = styled.img`
  @media (min-width: 799px) {
    max-width: 280px;
    min-width: 190px;
    max-height: 50%;
    min-height: 60px;
    margin-left: 20px;
  }
  max-height: 90%;
  max-width: 100%;
`;

export const IconeLogo = styled.img`
  max-height: 90%;
  max-width: 100%;
`;
// ...
export const NavBar = styled.nav`
  display: inline-flex;
  justify-content: flex-end;
  min-width: 510px;
  width: 85%;
  height: 100%;
  align-items: center;
`;

export const ButtonMenu = styled.button`
  box-shadow: none !important;
  text-transform: none;
  border: none;
  background-color: white;
  color: #2c73d2;
  transition: 0.3s all ease-in-out;
  position: relative;
  outline: none !important;
  width: 150px;
  height: 60px;
  font-size: 18px;
  padding: 2%;
  align-items: center;
  justify-content: center;
  display: flex;

  :hover {
    z-index: 9999999;
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
    box-shadow: none !important;
    color: white;
    transition-duration: 0.3s;
    background: radial-gradient(circle, #009efa 100%, #2c73d2 5%) !important;
  }
`;

export const ItemMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ...
