const router = require("express").Router();
const { login, register, me } = require("../controllers/auth");
const { authenticate } = require("../helpers/jwt");

router.post("/login", login);
router.post("/register", register);
router.get("/me", authenticate, me);

module.exports = router;
