import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, passward } = req.body;
  if (
    !username ||
    !email ||
    !passward ||
    username === "" ||
    email === "" ||
    passward === ""
  ) {
    next(errorHandler(400,'all field are required'));
  }
  const hashpassward = bcryptjs.hashSync(passward, 10);
  const newUser = new User({
    username,
    email,
    passward: hashpassward,
  });
  try {
    await newUser.save();
    res
      .status(201)
      .json({ message: "User signed up successfully!", user: req.body });
  } catch (err) {
    next(err);
  }
};
