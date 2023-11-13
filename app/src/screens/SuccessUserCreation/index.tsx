import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Login.routes";

import * as Style from "./styles";

export default () => {
  const navigation = useNavigation<StackTypes>();
  const success = require("../../../assets/success.png");

  return (
    <Style.Container>
      <Style.ImageContainer>
        <Style.Image source={success} />
      </Style.ImageContainer>

      <Style.MessageContainer>
        <Style.Title>Success creating user</Style.Title>
        <Style.Subtitle>
          You can now proceed to the user registration screen
        </Style.Subtitle>
      </Style.MessageContainer>

      <Style.ContainerButton>
        <Style.Button
          onPress={() => {
            navigation.navigate("options");
          }}
        >
          <Style.TextButton>Go back</Style.TextButton>
        </Style.Button>
      </Style.ContainerButton>
    </Style.Container>
  );
};
