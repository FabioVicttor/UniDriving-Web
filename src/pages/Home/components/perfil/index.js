import React from "react";

import { Card } from "./style";

export default function Perfil() {
  return (
    <Card>
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          padding: "1px",
          borderWidth: "5px",
        }}
      >
        <span
          style={{ fontSize: "50px", padding: "2%" }}
          className="k-icon k-i-user title"
        ></span>
      </div>
      <h1>PERFIL</h1>
    </Card>
  );
}
