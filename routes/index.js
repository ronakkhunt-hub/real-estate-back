const router = require("express").Router();
const authRouter = require("../routes/auth");

router.use("/auth", authRouter);

module.exports = router;
