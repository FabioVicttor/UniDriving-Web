import React from "react";
import { useAuth } from "../../../../../hooks/auth";
import { bool } from "prop-types";
import {
  TopMenu,
  LeftMenu,
  NavBar,
  ButtonMenu,
  ItemMenu,
  ImgLogo,
  DivImgLogo,
} from "./style";
import Icons_Exit from "../../../../../assets/icons/icon_exit";
import "./style.css";

import LogoHeader from "../../../../../assets/LogoSemFundo.png";
import IconeLogo from "../../../../../assets/Icone_Logo.png";

Menu.propTypes = {
  open: bool.isRequired,
};

export default function Menu({ open }) {
  const { signOut } = useAuth();

  return (
    <div>
      <TopMenu>
        <DivImgLogo>
          <ImgLogo src={LogoHeader} />{" "}
        </DivImgLogo>
        <NavBar>
          <div>
            <ButtonMenu onClick={(e) => {}}>Meus Anúncios</ButtonMenu>
          </div>

          <div>
            <ButtonMenu>
              <span
                style={{ fontSize: "50px", padding: "2%" }}
                className="k-icon k-i-myspace title"
              ></span>{" "}
              Grupos
            </ButtonMenu>
          </div>

          <div>
            <ButtonMenu onClick={signOut}>
              <Icons_Exit />
              Sair
            </ButtonMenu>
          </div>
        </NavBar>
      </TopMenu>

      <LeftMenu open={open}>
        <DivImgLogo>
          <ImgLogo src={IconeLogo} />{" "}
        </DivImgLogo>
        <nav style={{ width: "100%", display: "inline" }}>
          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }} onClick={(e) => {}}>
              Meus Anúncios
            </ButtonMenu>
          </ItemMenu>

          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }}>
              <span
                style={{ fontSize: "40px", padding: "2%" }}
                className="k-icon k-i-myspace title"
              ></span>{" "}
              Grupos
            </ButtonMenu>
          </ItemMenu>
          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }} onClick={(e) => {}}>
              Meus Anúncios
            </ButtonMenu>
          </ItemMenu>

          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }}>
              <span
                style={{ fontSize: "40px", padding: "2%" }}
                className="k-icon k-i-myspace title"
              ></span>{" "}
              Perfil
            </ButtonMenu>
          </ItemMenu>

          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }} onClick={signOut}>
              <Icons_Exit />
              Sair
            </ButtonMenu>
          </ItemMenu>
        </nav>
      </LeftMenu>
    </div>
  );
}
