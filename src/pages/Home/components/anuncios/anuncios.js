import React from "react";

import { Box } from "./style";

export default function Anuncios_sub() {
  return (
    <div className="force-overflow">
      <Box>
        <div style={{ width: "25%" }}>
          <p>Data: 06/12/2020</p>
          <p>Usuario: Fabio</p>
        </div>
        <div style={{ width: "30%" }}>
          <h1 style={{ padding: "0px" }}>Title</h1>
          <p>Celular</p>
        </div>
        <div style={{ width: "45%" }}>
          <h1 style={{ padding: "0px" }}>Destino</h1>
          <p>Descrição: Supunhetemos que seja curta.</p>
        </div>
      </Box>
    </div>
  );
}
