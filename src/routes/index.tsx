import { NavigationContainer } from "@react-navigation/native";

import Login from "./Login.routes";
import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <NavigationContainer>
      <Login />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
