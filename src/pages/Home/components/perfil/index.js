import React from "react";
import { Card, ItemPerfil, LabelPerfil } from "./style";
import {useAuth} from "../../../../hooks/auth"
import Icon_CPF from "../../../../assets/icons/icon_cpf"
import Icon_CNH from "../../../../assets/icons/icon_cnh"
import Icon_Phone from "../../../../assets/icons/icon_phone"
import Icon_Email from "../../../../assets/icons/icon_email"
import Icon_Account from "../../../../assets/icons/icon_account"

export default function Perfil() {
  const {user} = useAuth()
  console.log(user);
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
          padding: "10px",
          borderWidth: "5px"
        }}
      >
        <span
          style={{ fontSize: "50px", padding: "2%" }}
          className="k-icon k-i-user title"
        ></span>
      </div>
      <h1>Perfil</h1>
      <div style={{display:"flex", flexDirection:"column"}}>
      <ItemPerfil>
          <Icon_Account/>
          <LabelPerfil >Nome: </LabelPerfil>
          <h3>{user.name}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <Icon_CPF/>
          <LabelPerfil >CPF: </LabelPerfil>
          <h3 style={{margin: "0px"}}>{user.cpf}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <Icon_Email/>
          <LabelPerfil >Email: </LabelPerfil>
          <h3>{user.email}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <Icon_CNH/>
          <LabelPerfil >CNH: </LabelPerfil>
          <h3>{user.cnh}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <Icon_Phone/>
          <LabelPerfil >Telefone: </LabelPerfil>
          <h3>{user.cellphone}</h3>
        </ItemPerfil>
      </div>

    </Card>
  );
}
