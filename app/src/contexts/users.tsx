import { PropsWithChildren, createContext } from "react";
import { getAllUsers, createUser } from "../service/user";

interface UserContext {
  getUsers: Function;
  addUser: Function;
}

export const UserContext = createContext<UserContext>({
  getUsers: () => {},
  addUser: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const users = getAllUsers();

  function getUsers() {
    return users;
  }

  function addUser(user: UserType) {
    const id = Math.floor(Math.random() * 1000000) + 1;

    const newUser = { ...user, status: "Ativo", id: id.toString() };
    createUser(newUser);
  }

  return (
    <UserContext.Provider value={{ getUsers, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
