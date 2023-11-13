import React from "react";
import Routes from "./src/routes";
import Toast from "react-native-toast-message";

import UserProvider from "./src/contexts/users";

export default function App() {
  return (
    <>
      <UserProvider>
        <Routes />
      </UserProvider>
      <Toast topOffset={56} />
    </>
  );
}
