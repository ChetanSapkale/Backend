const express = require("express");
const UserModel = require("../Models/User.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.send("All the fields are required");
    return;
  }

  try {
    const newUser = await UserModel.create(req.body);
    res.cookie("currentUser", JSON.stringify(newUser), {
      httpOnly: true,
      sameSite: "Lax",
    });
    res.status(200).send("User Created Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const isUserExists = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!isUserExists) {
      res
        .status(400)
        .json({ message: "Entered email or password is incorrect" });
      return;
    }
    res.cookie("currentUser", JSON.stringify(isUserExists));

    res
      .status(200)
      .json({ message: "User Logged In Successfully", user: isUserExists });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get("/logout", (req, res) => {
  res.clearCookie("currentUser");
  res.status(200).json({ message: "User Logged Out Successfully" });
});

module.exports = userRouter;
