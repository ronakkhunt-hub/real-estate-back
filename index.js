const express = require("express");
const rootRouter = require("./routes/index");
require("dotenv").config();
require("./helpers/database")();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb" }));

app.use("/api", rootRouter);

app.listen(8000, () => {
  console.log("⚡⚡ Server started ⚡⚡");
});
