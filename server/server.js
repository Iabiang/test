const { json, urlencoded } = require("express");
const express = require("express");
// const ejs = require("ejs");
const app = express();
const port = 8000;
const db = require("./config/database");
const individualsRoute = require("./routes/individualsRoutes");
const companyRoutes = require("./routes/companyRoutes");
const projectManagerRoutes = require("./routes/projectManagerRoutes");
const projectRoutes = require("./routes/projectRoutes");
const subProjectRoutes = require("./routes/subProjectRoutes");

app.use(express.static("public"));
// app.use(json())

app.set("view engine", "ejs");
app.use(json(), urlencoded({ extended: true }));

app.use("/api/v1/individuals", individualsRoute);
app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/project_managers", projectManagerRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/sub_projects", subProjectRoutes);

//database
db.connect()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((err) => console.log("Error: " + err));
