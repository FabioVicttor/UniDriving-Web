import React from "react";
import api from "../../../../services/api";
import { useAuth } from "../../../../hooks/auth";
import Card from './card';

export default function Anuncios_sub() {
  const { token } = useAuth();
  const [anuncios, setAnuncios] = React.useState([]);

  React.useEffect(() => {
    api
      .get("announcements?filter=all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setAnuncios(response.data));
  }, [token]);

  return (
    <div className="force-overflow">
      {anuncios.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
