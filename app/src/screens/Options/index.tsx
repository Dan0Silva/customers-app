import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Login.routes";

import * as Style from "./styles";

export default () => {
  const navigation = useNavigation<StackTypes>();
  const logoSource = require("../../../assets/icon.png");

  return (
    <Style.Container>
      <Style.Header>
        <Style.ImageLogo source={logoSource} />
        <Style.HeaderText>Customers App</Style.HeaderText>
      </Style.Header>

      <Style.Form>
        <Style.Options>
          <Style.Button onPress={() => navigation.navigate("createUser")}>
            <Style.Icon name={"add"} size={26} color="black" />
            <Style.TextButton>Cadastro</Style.TextButton>
          </Style.Button>

          <Style.Divider />

          <Style.Button onPress={() => navigation.navigate("list")}>
            <Style.Icon name={"list"} size={26} color="black" />
            <Style.TextButton>Listagem</Style.TextButton>
          </Style.Button>
        </Style.Options>
      </Style.Form>
    </Style.Container>
  );
};
