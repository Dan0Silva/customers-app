import User from "../model/userModel.js";

class UserController {
  static getAllEntities = async (req, res) => {
    try {
      const users = await User.findAll();
      users.forEach((element) => {
        delete element.dataValues.password;
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send({ message: `${error.message}` });
    }
  };

  static createUser = async (req, res) => {
    try {
      const { id, name, email, password, status } = req.body;

      const createdUser = await User.create({
        id,
        name,
        email,
        password,
        status,
      });

      delete createdUser.dataValues.password;

      res.status(201).send({ createdUser });
    } catch (error) {
      if (error.name == "SequelizeUniqueConstraintError") {
        res.status(400).send({ message: "Values already registered" });
      } else {
        res.status(500).send({ message: `${error.message}` });
      }
    }
  };
}

export default UserController;
