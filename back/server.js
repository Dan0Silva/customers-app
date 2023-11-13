import express, { json } from "express";

import db from "./src/config/dbConfig.js";
import User from "./src/model/userModel.js";

import UserController from "./src/controllers/userController.js";

try {
  await db.sync({ force: true });
  console.warn("All models were synchronized successfully.");
} catch (error) {
  console.error(error);
}

const app = express();

app.use(json());

app.get("/users", UserController.getAllEntities);

app.post("/users", UserController.createUser);

app.listen(3000, () => {
  console.log("Success api listen on port 3000!");
});
