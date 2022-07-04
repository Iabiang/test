const express = require("express");
const router = express.Router();
const projectMangerController = require("../controllers/projectMangerController");

router
  .route("/")
  .get(projectMangerController.listProjectMangers)
  .post(projectMangerController.addProjectManger);

router.route("/count").get(projectMangerController.countProjectMangers);

router
  .route("/:project_manager_id")
  .get(projectMangerController.getProjectManagerDetails)
  .put(projectMangerController.updateProjectManagerDetails)
  .delete(projectMangerController.deleteProjectManager);

router
  .route("/:project_manager_id/projects")
  .get(projectMangerController.getProjectManagerProjects);

router
  .route("/:project_manager_id/projects/count")
  .get(projectMangerController.countProjectMangerProjects);

router
  .route("/:project_manager_id/projects/:project_id")
  .get(projectMangerController.getProjectManagerProject)
  .put(projectMangerController.updateProjectManagerProject)
  .delete(projectMangerController.deleteProjectManagerProject);

router
  .route("/:project_manager_id/sub_projects")
  .get(projectMangerController.getProjectManagerSubProjects);

router
  .route("/:project_manager_id/sub_projects/count")
  .get(projectMangerController.countProjectManagerSubprojects);

router
  .route("/:project_manager_id/sub_projects/:sub_project_id")
  .get(projectMangerController.getProjectManagerSubProjectDetails)
  .put(projectMangerController.updateProjectManagerSubProjectDetails)
  .delete(projectMangerController.deleteProjectManagerSubproject);

module.exports = router;
