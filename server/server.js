const express = require("express");
// const ejs = require("ejs");
const app = express();
const port = 4000;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/client/*", (req, res) => {
  res.render("client");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
