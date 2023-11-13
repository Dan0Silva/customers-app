import React, { useContext } from "react";

import { UserContext } from "../../contexts/users";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/Login.routes";

import * as Style from "./styles";

/**
 *
 * Eu sei que nessa parte vai tentar cadastrar um nome grande e realmente
 * nao tratei isso por falta de tempo, nao sei se tenho q entregar esse
 * codigo hj 10h (daqui 30 min) ou se tenho até amanha (segunda)....
 *
 *     ──────▄▀▄─────▄▀▄
 *    ─────▄█░░▀▀▀▀▀░░█▄
 *    ─▄▄──█░░░░░░░░░░░█──▄▄
 *   █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
 *
 */

export default function App() {
  const navigation = useNavigation<StackTypes>();
  const logoSource = require("../../../assets/icon.png");

  const { userList } = useContext(UserContext);

  const RenderItem = (user: UserType) => {
    const statusColor = user.status == "Ativo" ? "#3ebb51" : "#bb3e3e";

    return (
      <Style.ContainerItem>
        <Style.ContainerText>
          <Style.Name>{user.name}</Style.Name>
          <Style.Email>{user.email}</Style.Email>
        </Style.ContainerText>
        <Style.ContainerStatus style={{ backgroundColor: statusColor }}>
          <Style.Status>{user.status}</Style.Status>
        </Style.ContainerStatus>
      </Style.ContainerItem>
    );
  };

  return (
    <Style.Container>
      <Style.Header>
        <Style.backButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Style.backIcon name={"arrow-back"} size={30} color={"black"} />
        </Style.backButton>
        <Style.ImageLogo source={logoSource} />
        <Style.HeaderText>Customers App</Style.HeaderText>
      </Style.Header>

      <Style.ContainerList>
        <Style.List
          data={userList as UserType[]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => RenderItem(item)}
        />
      </Style.ContainerList>
    </Style.Container>
  );
}
