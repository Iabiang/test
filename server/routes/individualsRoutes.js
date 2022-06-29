const express = require("express");
const individualController = require("../controllers/individualController");
const router = express.Router();

//routes for individuals
router
  .route("/")
  .get(individualController.listIndividuals)
  .post(individualController.createIndividual);

router.route("/count").get(individualController.countListIndividuals);

router
  .route("/:individual_id")
  .get(individualController.individualsDetails)
  .put(individualController.updateIndividual)
  .delete(individualController.deleteIndividual);

router
  .route("/:individual_id/tasks")
  .get(individualController.listIndividualTask);

router
  .route("/:individual_id/tasks/count")
  .get(individualController.countIndividualTask);

router
  .route("/:individual_id/tasks/:task_id")
  .get(individualController.individualTask)
  .put(individualController.updateIndividualTask)
  .delete(individualController.deleteIndividualTask);

router
  .route("/:individual_id/teams")
  .get(individualController.listIndividualTeams);

router
  .route("/:individual_id/teams/count")
  .get(individualController.countIndividualTeams);

router
  .route("/:individual_id/teams/:team_id")
  .get(individualController.getIndividualTeam)
  .put(individualController.updateIndividualTeam)
  .delete(individualController.deleteIndividualTeam);

module.exports = router;
