const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router
  .route("/")
  .get(teamController.getTeamLists)
  .post(teamController.createTeam);

router.route("/findByStatus").get(teamController.getTeamByStatus);

router.route("/count").get(teamController.countTeams);

router
  .route("/:team_id")
  .get(teamController.getTeamDetails)
  .put(teamController.updateTeamDetails)
  .delete(teamController.deleteTeam);
module.exports = router;
