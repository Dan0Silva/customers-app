import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import Options from "../screens/Options";
import List from "../screens/List";
import CreateUser from "../screens/CreateUser";
import SuccessUserCreation from "../screens/SuccessUserCreation";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  options: undefined;
  list: undefined;
  createUser: undefined;
  success: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"options"}
    >
      <Stack.Screen name={"options"} component={Options} />
      <Stack.Screen name={"list"} component={List} />
      <Stack.Screen name={"createUser"} component={CreateUser} />
      <Stack.Screen name={"success"} component={SuccessUserCreation} />
    </Stack.Navigator>
  );
};
