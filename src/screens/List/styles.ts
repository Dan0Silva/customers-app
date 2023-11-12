import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: rgb(255, 255, 255);
`;

export const Header = styled.View`
  height: 60px;
  margin-top: 45px;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  flex-direction: row;
`;

export const backButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

export const backIcon = styled(Ionicons)``;

export const ImageLogo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-left: 12px;
`;

export const ContainerList = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const List = styled.FlatList``;

export const ContainerItem = styled.View`
  width: 350px;
  height: 100px;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: #cfd5e1;
  overflow: hidden;
`;

export const ContainerText = styled.View`
  flex: 3;
  justify-content: center;
  padding-left: 20px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: 500;
`;

export const Email = styled.Text`
  font-size: 14px;
`;

export const ContainerStatus = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 6px;
  background-color: #3ebb51;
`;

export const Status = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
