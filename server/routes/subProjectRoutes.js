const express = require("express");
const router = express.Router();
const subProjectController = require("../controllers/subProjectController");

router
  .route("/")
  .get(subProjectController.getSubProjectsList)
  .post(subProjectController.addSubproject);

router.route("/count").get(subProjectController.countSubProjects);

router
  .route("/:sub_project_id")
  .get(subProjectController.getSubProjectDetails)
  .put(subProjectController.updateSubProject);

router
  .route("/:sub_project_id/tasks")
  .get(subProjectController.getSubProjectTasks);

router
  .route("/:sub_project_id/tasks/count")
  .get(subProjectController.countSubProjectTasks);

router
  .route("/:sub_project_id/tasks/:task_id")
  .get(subProjectController.getSubProjectTaskDetails)
  .put(subProjectController.updateSubProjectTask)
  .delete(subProjectController.deleteSubProjectTask);
module.exports = router;
