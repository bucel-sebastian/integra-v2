const routes = require("./routes");
const fs = require("fs");
const express = require("express");
const os = require("os");

const app = express();

app.listen(3000, () => {
  console.log("Integra backend is running on port 3000");
  routes(app);
});
