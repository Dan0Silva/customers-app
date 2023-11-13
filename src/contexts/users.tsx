import React from "react";
import { PropsWithChildren, createContext, useState } from "react";

interface UserContext {
  userList: Array<UserType>;
  addUser: Function;
}

export const UserContext = createContext<UserContext>({
  userList: [],
  addUser: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [userList, setUserList] = useState<UserType[]>([
    {
      id: "1313",
      name: "Danilo A. Silva",
      email: "danilo@mail.com",
      password: "test",
      confirmPassword: "test",
      status: "Ativo",
    },
    {
      id: "1212",
      name: "Roberto Silva",
      email: "robs@mail.com",
      password: "test",
      confirmPassword: "test",
      status: "Inativo",
    },
    {
      id: "1010",
      name: "Amanda Taves",
      email: "a.taves@mail.com",
      password: "test",
      confirmPassword: "test",
      status: "Ativo",
    },
  ]);

  function addUser(user: UserType) {
    const id = Math.floor(Math.random() * 1000000) + 1;

    const newUser = { ...user, status: "Ativo", id: id.toString() };
    setUserList([...userList, newUser]);
  }

  return (
    <UserContext.Provider value={{ userList, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
