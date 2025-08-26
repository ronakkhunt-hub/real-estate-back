const bcrypt = require("bcrypt");
const { findUser, createUser } = require("../services/user");
const { createToken } = require("../helpers/jwt");

const register = async (req, res) => {
  try {
    const payload = req.body;
    const userInfo = await findUser({ email: payload?.email });
    if (userInfo) {
      return res.status(409).json({ message: "User already exist" });
    } else {
      const hashedPassword = await bcrypt.hash(payload?.password, 12);
      const createdUser = await createUser({
        ...payload,
        password: hashedPassword,
      });
      const token = await createToken({ email: payload.email });
      return res
        .status(200)
        .json({ message: "Register successfully", data: createdUser, token });
    }
  } catch (error) {
    return res.status(400).json({ message: error?.message });
  }
};

const login = async (req, res) => {
  try {
    const payload = req.body;
    const userInfo = await findUser({ email: payload?.email });
    if (!userInfo) {
      return res.status(409).json({ message: "User does not exist" });
    } else {
      const token = await createToken({ email: payload.email });
      return res
        .status(200)
        .json({ message: "Login successfully", data: userInfo, token });
    }
  } catch (error) {
    return res.status(400).json({ message: error?.message });
  }
};

const me = async (req, res) => {
  try {
    return res.status(200).json({ message: "Success", data: req?.user });
  } catch (error) {
    return res.status(400).json({ message: error?.message });
  }
};

module.exports.login = login;
module.exports.register = register;
module.exports.me = me;
