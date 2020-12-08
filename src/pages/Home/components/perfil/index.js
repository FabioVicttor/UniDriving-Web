import React from "react";
import { Card, ItemPerfil, LabelPerfil } from "./style";
import { useAuth } from "../../../../hooks/auth";
import IconCPF from "../../../../assets/icons/icon_cpf";
import IconCNH from "../../../../assets/icons/icon_cnh";
import IconPhone from "../../../../assets/icons/icon_phone";
import IconEmail from "../../../../assets/icons/icon_email";
import IconAccount from "../../../../assets/icons/icon_account";

export default function Perfil() {
  const { user } = useAuth();
  return (
    <Card>
      <div>
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
            borderWidth: "5px",
          }}
        >
          <span
            style={{ fontSize: "50px", padding: "2%" }}
            className="k-icon k-i-user title"
          ></span>
        </div>
        <h1>PERFIL</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ItemPerfil>
          <IconAccount />
          <LabelPerfil>Nome: </LabelPerfil>
          <h3>{user.name}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <IconCPF />
          <LabelPerfil>CPF: </LabelPerfil>
          <h3>{user.cpf}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <IconEmail />
          <LabelPerfil>Email: </LabelPerfil>
          <h3>{user.email}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <IconCNH />
          <LabelPerfil>CNH: </LabelPerfil>
          <h3>{user.cnh}</h3>
        </ItemPerfil>
        <ItemPerfil>
          <IconPhone />
          <LabelPerfil>Telefone: </LabelPerfil>
          <h3>{user.cellphone}</h3>
        </ItemPerfil>
      </div>
    </Card>
  );
}
