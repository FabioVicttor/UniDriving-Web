import React from "react";
import { Button } from "@progress/kendo-react-buttons";

import { useAuth } from "../../hooks/auth";

import Logo1 from "../../assets/Logo1.png";

import { ImgLogo } from "./style";

export default function Home() {
  const { signOut } = useAuth();


  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <ImgLogo src={Logo1} />
        </div>
        <div>Meus Anúncios</div>
        <div>Chat</div>
        <div>
          <Button
            style={{
              backgroundColor: "#2C73D2",
              borderColor: "#2C73D2",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Anunciar
          </Button>

          <Button onClick={signOut}></Button>
        </div>
      </div>
    </div>
  );
}
