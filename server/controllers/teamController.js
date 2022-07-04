const TeamService = require("../services/queryService");
const { Table } = require("../models/listOfTables");
const { object } = require("yup");

exports.getTeamLists = (req, res) => {
  TeamService.findAll({
    tableName: Table.team,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.createTeam = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  TeamService.create({
    tableName: Table.team,
    keys: keys,
    values: values,
  })
    .then(() => res.status(201).send("Team Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getTeamByStatus = (req, res) => {
  const { status } = req.query;
  TeamService.findByStrings({
    tableName: Table.team,
    columnNames: ["activitystatus"],
    values: [status],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countTeams = (req, res) => {
  TeamService.countRows({
    tableName: Table.team,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getTeamDetails = (req, res) => {
  const { team_id } = req.params;
  TeamService.findById({
    tableName: Table.team,
    columnName: "teamid",
    id: team_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateTeamDetails = (req, res) => {
  const { team_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  TeamService.update({
    tableName: Table.team,
    keys: keys,
    values: values,
    columnNames: ["teamid"],
    id: [team_id],
  })
    .then(() => res.status(200).send(`Team with ID ${team_id} updated`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteTeam = (req, res) => {
  const { team_id } = req.params;
  TeamService.delete({
    tableName: Table.team,
    columnNames: ["teamid"],
    values: [team_id],
  })
    .then(() => res.status(200).send(`Team with ID ${team_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
