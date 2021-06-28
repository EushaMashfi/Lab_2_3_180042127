const express = require("express");
const app = express();
const userRoutes = require("./routes/authRoute");

app.use(express.static("public"));
app.use(userRoutes);
module.exports = app;
