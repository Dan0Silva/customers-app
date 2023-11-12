import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fcfdff;
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

export const Form = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fcfdff;
`;

/**
 * Aqui daria para criar um componente separado ao invés de fazer xunxado aqui,
 * mas como quero ser rápido, isso vai resolver.
 *
 */

export const TitleField = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

export const ContainerField = styled.View`
  width: 340px;
  height: 52px;
  border-radius: 6px;
  padding: 12px;
  margin-top: 10px;
  margin-bottom: 20px;

  background-color: #a6aec1;
`;

export const Field = styled.TextInput`
  width: 100%;
  flex: 1;
  font-size: 18px;
`;

export const ContainerButton = styled.View`
  width: auto;
  margin-bottom: 22px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 340px;
  height: 52px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  background-color: #a6aec1;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #fcfdff;
`;
