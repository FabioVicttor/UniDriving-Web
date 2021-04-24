
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Box, ButtonAdicar } from "./style";

function Data() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length === 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = mes.length === 1 ? "0" + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}


export default function Card({ item }) {
  const numeroEstrelas = parseInt(getRandomArbitrary(2, 6));

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <Box>
      <div style={{ width: "25%" }}>
        <p>{Data(item.created_at)}</p>
        <p>Usuario: {item.user.name}</p>
        <div style={{ width: 100, marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <FaStar color="#ff9800"/>
          <FaStar color={numeroEstrelas >= 2 ? '#ff9800' : '#000'} />
          <FaStar color={numeroEstrelas >= 3 ? '#ff9800' : '#000'} />
          <FaStar color={numeroEstrelas >= 4 ? '#ff9800' : '#000'} />
          <FaStar color={numeroEstrelas >= 5 ? '#ff9800' : '#000'} />
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <h1 style={{ padding: "0px" }}>{item.title}</h1>
        <p>Celular: {item.user.cellphone}</p>
      </div>
      <div style={{ width: "30%" }}>
        <h1 style={{ padding: "0px" }}>{item.destiny}</h1>
        <p>Descrição: {item.description}.</p>
      </div>
      <div style={{ width: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <ButtonAdicar>Indicar</ButtonAdicar>
      </div>
    </Box>
  );
}
