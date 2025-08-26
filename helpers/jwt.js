const jwt = require("jsonwebtoken");
const { findUser } = require("../services/user");

const createToken = async (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });
};

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    const userInfo = await findUser({ email: payload?.email });
    if (userInfo) {
      req.user = userInfo;
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.createToken = createToken;
module.exports.authenticate = authenticate;
