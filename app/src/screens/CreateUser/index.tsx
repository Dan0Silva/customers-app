import React, { useState, useContext } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Toast from "react-native-toast-message";

import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Login.routes";

import { UserContext } from "../../contexts/users";

import * as Style from "./styles";

const defaultUser: UserType = {
  id: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default () => {
  const [user, setUser] = useState(defaultUser);

  const { addUser } = useContext(UserContext);

  const navigation = useNavigation<StackTypes>();
  const logoSource = require("../../../assets/icon.png");

  const createUser = () => {
    if (user.name == "" || user.email == "" || user.password == "") {
      Toast.show({
        type: "error",
        text1: "Campos não estão preenchidos corretamente!",
      });
    } else {
      if (user.password != user.confirmPassword) {
        Toast.show({
          type: "error",
          text1: "Senhas não coincidem!",
        });
      } else {
        addUser(user);
        navigation.navigate("success");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Style.Container>
        <Style.Header>
          <Style.backButton onPress={() => navigation.goBack()}>
            <Style.backIcon name={"arrow-back"} size={30} color={"black"} />
          </Style.backButton>
          <Style.ImageLogo source={logoSource} />
          <Style.HeaderText>Customers App</Style.HeaderText>
        </Style.Header>

        <Style.Form>
          <Style.ContainerField>
            <Style.Field
              placeholder="name"
              placeholderTextColor={"#fcfdff"}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
          </Style.ContainerField>

          <Style.ContainerField>
            <Style.Field
              placeholder="e-mail"
              placeholderTextColor={"#fcfdff"}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
          </Style.ContainerField>

          <Style.ContainerField>
            <Style.Field
              placeholder="password"
              secureTextEntry={true}
              placeholderTextColor={"#fcfdff"}
              onChangeText={(text) => setUser({ ...user, password: text })}
            />
          </Style.ContainerField>

          <Style.ContainerField>
            <Style.Field
              placeholder="confirm password"
              secureTextEntry={true}
              placeholderTextColor={"#fcfdff"}
              onChangeText={(text) =>
                setUser({ ...user, confirmPassword: text })
              }
            />
          </Style.ContainerField>
        </Style.Form>

        <Style.ContainerButton>
          <Style.Button
            onPress={() => {
              createUser();
            }}
          >
            <Style.TextButton>Create</Style.TextButton>
          </Style.Button>
        </Style.ContainerButton>
      </Style.Container>
    </TouchableWithoutFeedback>
  );
};
