import React from "react";
import { Button } from "@progress/kendo-react-buttons";

import { useAuth } from "../../hooks/auth";

import { Card } from "./style";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <div className="App-background-home">
      <div id="header" className="Header-home">
        <div className="Header-Logo">
          <h1>Logo</h1>
        </div>
        <div className="NavBar">
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Meus Anúncios</h1>
            </div>
            <a href="#"></a>
          </div>
          <div class="box">
            <div class="boxContent">
              <h1 class="title">Grupos</h1>
            </div>
            <a href="#"></a>
          </div>

          {/* <Button
            style={{
              backgroundColor: "#2C73D2",
              borderColor: "#2C73D2",
              width: "75%",
              fontWeight: "bold",
            }}
          >
            Anunciar
          </Button> */}
        </div>
        <Button onClick={signOut}>SignOut</Button>
      </div>

      <div className="Content">
        <Card></Card>
      </div>
    </div>
  );
}
