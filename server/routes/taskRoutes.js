const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskContoller");

router.route("/").get(taskController.getTasks).post(taskController.createTask);

router.route("/findByActionStatus").get(taskController.getTaskByActionStatus);

router.route("/count").get(taskController.countTasks);

router
  .route("/:task_id")
  .get(taskController.getTaskDetails)
  .put(taskController.updateTaskDetails)
  .delete(taskController.deleteTask);
module.exports = router;
