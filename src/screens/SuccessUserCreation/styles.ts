import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 180px;
  align-items: center;
  background-color: #a6aec1;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 80px;
`;

export const MessageContainer = styled.View`
  padding: 25px;
  margin-top: 90px;
`;

export const Title = styled.Text`
  font-size: 48px;
  margin-bottom: 40px;
  font-weight: 500;
  color: #252121;
`;

export const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #252121;
`;

export const ContainerButton = styled.View`
  width: auto;
  margin-top: auto;
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
