import React from "react";
import api from "../../../../services/api";
import { useAuth } from "../../../../hooks/auth";

import { Box } from "./style";

export default function Anuncios_sub() {
  const { token } = useAuth();
  const [anuncios, setAnuncios] = React.useState([]);

  React.useEffect(() => {
    api
      .get("announcements?filter=all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAnuncios(response.data));
  }, []);

  function Data() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  return (
    <div className="force-overflow">
      {anuncios.map((item) => (
        <Box key={item.id}>
          <div style={{ width: "25%" }}>
            <p>{Data(item.created_at)}</p>
            <p>Usuario: Fabio</p>
          </div>
          <div style={{ width: "30%" }}>
            <h1 style={{ padding: "0px" }}>{item.title}</h1>
            <p>Celular</p>
          </div>
          <div style={{ width: "45%" }}>
            <h1 style={{ padding: "0px" }}>{item.destiny}</h1>
            <p>Descrição: {item.description}.</p>
          </div>
        </Box>
      ))}
    </div>
  );
}
