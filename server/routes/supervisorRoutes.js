const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisorController");

router
  .route("/")
  .get(supervisorController.getSupervisorList)
  .post(supervisorController.createSupervisor);

router.route("/count").get(supervisorController.countSupervisors);

router
  .route("/:supervisor_id")
  .get(supervisorController.getSupervisorDetails)
  .put(supervisorController.updateSupervisorDetails)
  .delete(supervisorController.deleteSupervisor);

router
  .route("/:supervisor_id/teams")
  .get(supervisorController.getSupervisorTeams);

router
  .route("/:supervisor_id/teams/count")
  .get(supervisorController.countSupervisorTeams);

router
  .route("/:supervisor_id/teams/:team_id")
  .get(supervisorController.getSupervisorTeamDetails)
  .put(supervisorController.updateSupervisorTeamsDetails)
  .delete(supervisorController.deleteSupervisorTeam);
module.exports = router;
