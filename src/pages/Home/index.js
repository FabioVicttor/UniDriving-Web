import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../App.css";
import { Card, Img_Logo } from "./style";
import Logo1 from "../../Logo1.png";

import { Button } from "@progress/kendo-react-buttons";

import "@progress/kendo-theme-material";

export default function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Img_Logo src={Logo1} />
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
        </div>
      </div>
    </div>
  );
}
