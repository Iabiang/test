const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const { route } = require("./individualsRoutes");

router
  .route("/")
  .get(projectController.getProjectList)
  .post(projectController.createProjectList);

router.route("/count").get(projectController.countProjects);

router
  .route("/:project_id")
  .get(projectController.getProjectDetails)
  .put(projectController.updateProjectDetails)
  .delete(projectController.deleteProject);

router.route("/:project_id/tasks").get(projectController.getProjectTasks);

router.route("/:project_id/tasks");

router
  .route("/:project_id/tasks/count")
  .get(projectController.countProjectTasks);

router
  .route("/:project_id/tasks/:task_id")
  .get(projectController.getProjectTaskDetail)
  .put(projectController.updateProjectTaskdetail)
  .delete(projectController.deleteProjectTask);
module.exports = router;
