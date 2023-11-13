import axios from "axios";

const api = axios.create({
  baseURL: `http://192.168.1.110:3000`,
});

const getAllUsers = async () => {
  const users = await api.get("/users");
  console.log("MY USERS: ", users.request.data);
  return users;
};

const createUser = async (user: UserType) => {
  await api.post("/users", user);
};

export { getAllUsers, createUser };
