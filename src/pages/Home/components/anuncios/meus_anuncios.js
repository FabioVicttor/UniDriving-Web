import React from "react";
import api from "../../../../services/api";
import { useAuth } from "../../../../hooks/auth";

import { Box } from "./style";

export default function Meus_Anuncios_sub() {
  const { token } = useAuth();
  const [anuncios,setAnuncios] = React.useState(false);

  api.get("announcements", {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(anuncios);
  return (
    <div>
      <div className="force-overflow">
        <Box>
          <div style={{ width: "25%" }}>
            <p>Data: 06/12/2020</p>
          </div>
          <div style={{ width: "25%" }}>
            <h1 style={{ padding: "0px" }}>Title</h1>
          </div>
          <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0px" }}>Destino</h1>
            <p>Descrição: Supunhetemos que seja curta.</p>
          </div>
        </Box>
        <Box>
          <div style={{ width: "25%" }}>
            <p>Data: 06/12/2020</p>
          </div>
          <div style={{ width: "25%" }}>
            <h1 style={{ padding: "0px" }}>Title</h1>
          </div>
          <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0px" }}>Destino</h1>
            <p>Descrição: Supunhetemos que seja curta.</p>
          </div>
        </Box>
        <Box>
          <div style={{ width: "25%" }}>
            <p>Data: 06/12/2020</p>
          </div>
          <div style={{ width: "25%" }}>
            <h1 style={{ padding: "0px" }}>Title</h1>
          </div>
          <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0px" }}>Destino</h1>
            <p>Descrição: Supunhetemos que seja curta.</p>
          </div>
        </Box>
        <Box>
          <div style={{ width: "25%" }}>
            <p>Data: 06/12/2020</p>
          </div>
          <div style={{ width: "25%" }}>
            <h1 style={{ padding: "0px" }}>Title</h1>
          </div>
          <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0px" }}>Destino</h1>
            <p>Descrição: Supunhetemos que seja curta.</p>
          </div>
        </Box>
        <Box>
          <div style={{ width: "25%" }}>
            <p>Data: 06/12/2020</p>
          </div>
          <div style={{ width: "25%" }}>
            <h1 style={{ padding: "0px" }}>Title</h1>
          </div>
          <div style={{ width: "50%" }}>
            <h1 style={{ padding: "0px" }}>Destino</h1>
            <p>Descrição: Supunhetemos que seja curta.</p>
          </div>
        </Box>
      </div>
    </div>
  );
}
