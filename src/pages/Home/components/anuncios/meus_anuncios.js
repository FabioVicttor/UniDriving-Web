import React from "react";
import api from "../../../../services/api";
import { useAuth } from "../../../../hooks/auth";
import IconDelete from "../../../../assets/icons/icon_delete";

import { Box, ButtonDelete } from "./style";

export default function Meus_Anuncios_sub() {
  const { token } = useAuth();
  const [anuncios, setAnuncios] = React.useState([]);

  React.useEffect(() => {
    api
      .get("announcements", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAnuncios(response.data));
  }, [token]);

  function Data() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  function del(id) {
    api.delete("announcements/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAnuncios(anuncios.filter((item) => item.id !== id));
  }

  return (
    <div>
      <div className="force-overflow">
        {anuncios.map((item) => (
          <Box key={item.id}>
            <div style={{ width: "25%" }}>
              <p>{Data(item.created_at)}</p>
            </div>
            <div style={{ width: "25%" }}>
              <h1 style={{ padding: "0px" }}>{item.title}</h1>
            </div>
            <div style={{ width: "50%" }}>
              <h1 style={{ padding: "0px" }}>{item.destiny}</h1>
              <p>Descrição: {item.description}.</p>
            </div>
            <div>
              <ButtonDelete
                onClick={() => {
                  del(item.id);
                }}
              >
                <IconDelete />
                Remover
              </ButtonDelete>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
}
