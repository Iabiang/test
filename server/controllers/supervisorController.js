const { Table } = require("../models/listOfTables");
const SupervisorService = require("../services/queryService");

exports.getSupervisorList = (req, res) => {
  SupervisorService.findAll({
    tableName: Table.supervisor,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.createSupervisor = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SupervisorService.create({
    tableName: Table.supervisor,
    keys: keys,
    values: values,
  })
    .then(() => res.status(201).send("Supervisor Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countSupervisors = (req, res) => {
  SupervisorService.countRows({
    tableName: Table.supervisor,
  })
    .then((results) => res.status(201).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getSupervisorDetails = (req, res) => {
  const { supervisor_id } = req.params;
  SupervisorService.findById({
    tableName: Table.supervisor,
    columnName: "supervisorid",
    id: supervisor_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateSupervisorDetails = (req, res) => {
  const { supervisor_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SupervisorService.update({
    tableName: Table.supervisor,
    keys: keys,
    values: values,
    columnNames: ["supervisorid"],
    id: [supervisor_id],
  })
    .then(() =>
      res.status(200).send(`Supervisor with id ${supervisor_id} updated`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteSupervisor = (req, res) => {
  const { supervisor_id } = req.params;
  SupervisorService.delete({
    tableName: Table.supervisor,
    columnNames: ["supervisorid"],
    values: [supervisor_id],
  })
    .then(() =>
      res.status(200).send(`Supervisor with id ${supervisor_id} deleted`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getSupervisorTeams = (req, res) => {
  const { supervisor_id } = req.params;
  SupervisorService.findByValue({
    tableName: Table.team,
    columnName: "supervisorid",
    value: supervisor_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countSupervisorTeams = (req, res) => {
  const { supervisor_id } = req.params;
  SupervisorService.countRows({
    tableName: Table.team,
    columnName: "supervisorid",
    key: supervisor_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getSupervisorTeamDetails = (req, res) => {
  const { supervisor_id, team_id } = req.params;
  SupervisorService.findByValues({
    tableName: Table.team,
    columnNames: ["supervisorid", "teamid"],
    values: [supervisor_id, team_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateSupervisorTeamsDetails = (req, res) => {
  const { supervisor_id, team_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SupervisorService.update({
    tableName: Table.team,
    keys: keys,
    values: values,
    columnNames: ["supervisorid", "teamid"],
    id: [supervisor_id, team_id],
    operator: "and",
  })
    .then(() => res.status(200).send(`Team with ID ${team_id} updated`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteSupervisorTeam = (req, res) => {
  const { supervisor_id, team_id } = req.params;
  SupervisorService.delete({
    tableName: Table.team,
    columnNames: ["supervisorid", "teamid"],
    values: [supervisor_id, team_id],
    operator: "and",
  })
    .then(() => res.status(200).send(`Team with ID ${team_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
