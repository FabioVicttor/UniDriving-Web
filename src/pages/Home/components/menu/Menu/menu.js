import React from "react";
import { Link } from "react-router-dom";
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
import IconExit from "../../../../../assets/icons/icon_exit";
import IconAnuncio from "../../../../../assets/icons/icon_anuncio";

import LogoHeader from "../../../../../assets/LogoSemFundo.png";
import IconeLogo from "../../../../../assets/Icone_Logo.png";

Menu.propTypes = {
  open: bool.isRequired,
};

export default function Menu({ open, setOpen, url }) {
  const { signOut } = useAuth();

  return (
    <div>
      <TopMenu>
        <DivImgLogo>
          <ImgLogo src={LogoHeader} />
        </DivImgLogo>
        <NavBar>
          <div>
            <Link
              to={`${url}/anuncios`}
              style={{ width: "95%", textDecoration: "none" }}
            >
              <ButtonMenu>
                <IconAnuncio />
                Anúncios
              </ButtonMenu>
            </Link>
          </div>

          <div>
            <Link
              to={`${url}/perfil`}
              style={{ width: "95%", textDecoration: "none" }}
            >
              <ButtonMenu>
                <span
                  style={{ fontSize: "40px", padding: "2%" }}
                  className="k-icon k-i-user title"
                ></span>
                Perfil
              </ButtonMenu>
            </Link>
          </div>

          <div>
            <ButtonMenu onClick={signOut}>
              <IconExit />
              Sair
            </ButtonMenu>
          </div>
        </NavBar>
      </TopMenu>

      <LeftMenu open={open}>
        <DivImgLogo>
          <ImgLogo src={IconeLogo} />
        </DivImgLogo>
        <nav style={{ width: "100%", display: "inline" }}>
          <ItemMenu>
            <Link
              to={`${url}/anuncios`}
              style={{ width: "95%", textDecoration: "none" }}
            >
              <ButtonMenu
                style={{ width: "100%" }}
                onClick={() => setOpen(false)}
              >
                <IconAnuncio />
                Anúncios
              </ButtonMenu>
            </Link>
          </ItemMenu>

          <ItemMenu>
            <Link
              to={`${url}/perfil`}
              style={{ width: "95%", textDecoration: "none" }}
            >
              <ButtonMenu
                style={{ width: "100%" }}
                onClick={() => setOpen(false)}
              >
                <span
                  style={{ fontSize: "40px", padding: "2%" }}
                  className="k-icon k-i-user title"
                ></span>
                Perfil
              </ButtonMenu>
            </Link>
          </ItemMenu>

          <ItemMenu>
            <ButtonMenu style={{ width: "95%" }} onClick={signOut}>
              <IconExit />
              Sair
            </ButtonMenu>
          </ItemMenu>
        </nav>
      </LeftMenu>
    </div>
  );
}
