const express = require("express");

const app = express();

const listUsers = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api Criada com sucesso");
});

app.get("/users", (req, res) => {
  res.json(listUsers);
});

app.post("/users", (req, res) => {
  const newUser = req.body;

  listUsers.push(newUser);
  res.json({ message: "Sucess to create user!" });
});

app.listen(3000, () => {
  console.log("Success api listen on port 3000!");
});
