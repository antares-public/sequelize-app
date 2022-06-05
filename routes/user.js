const express = require("express");
const {
  createUser: signUp,
  updateUser,
  getUsers,
  getUser,
  getTestUsers,
  deleteUser,
  deleteUsers,
} = require("../controllers/user");

const router = express.Router();

router.post("/users", signUp);

router.put("/users/:id", updateUser);

router.get("/users", getUsers);
router.get("/users-test", getTestUsers);
router.get("/users/:id", getUser);

router.delete("/users/:id", deleteUser);
router.delete("/users/", deleteUsers);

module.exports = router;
