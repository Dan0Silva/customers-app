import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #fcfdff;
`;

export const Header = styled.View`
  height: 60px;
  margin-top: 50px;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  flex-direction: row;
`;

export const ImageLogo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-left: 12px;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  margin-bottom: 60px;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.View`
  height: 300px;
  width: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #a6aec1;
`;

export const Button = styled.TouchableOpacity`
  width: 84%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #ededf2;
`;

export const Divider = styled.View`
  height: 1px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 80%;
  background-color: #ededf2;
`;

export const Icon = styled(Ionicons)`
  margin-right: 16px;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-right: 16px;
`;
