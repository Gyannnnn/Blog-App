import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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
    return res.json("All Feilds Are Required");
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
