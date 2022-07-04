const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskContoller");

router.route("/").get(taskController.getTasks);
module.exports = router;
