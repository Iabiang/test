const { Table } = require("../models/listOfTables");
const { validateIndividualSchema } = require("../validators/individual");
const IndividualService = require("../services/queryService");

/** return list of individuals */
exports.listIndividuals = (req, res) => {
  IndividualService.findAll({ tableName: Table.individual })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) => res.send(err.message));
};

/** return details of an individual */
exports.individualsDetails = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.findByValue({
    tableName: Table.individual,
    columnName: "individualid",
    value: individual_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

/** create an individual*/
exports.createIndividual = async (req, res) => {
  const { results, error } = await validateIndividualSchema(req.body);
  if (error) return res.status(400).send(error.errors);
  const keys = Object.keys(results);
  const values = Object.values(results);
  IndividualService.create({
    tableName: "individual",
    keys: keys,
    values: values,
  })
    .then((results) => res.status(201).send("Individual Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

/** update an individual details */
exports.updateIndividual = (req, res) => {
  const { individual_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  IndividualService.update({
    tableName: Table.individual,
    keys,
    values,
    columnNames: ["individualid"],
    id: [individual_id],
  })
    .then((results) =>
      res
        .status(201)
        .send(`Individual details with id ${individual_id} updated `)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

//delete an indvidual
exports.deleteIndividual = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.delete({
    tableName: "individual",
    columnNames: ["individualid"],
    values: [individual_id],
  })
    .then((results) =>
      res
        .status(201)
        .send(`Individual details with id ${individual_id} Removed `)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

//count list of individuals
exports.countListIndividuals = (req, res) => {
  IndividualService.countRows({ tableName: Table.individuals })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

/**
get task list of individuals
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.listIndividualTask = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.findByValue({
    tableName: "task",
    columnName: "individualid",
    value: individual_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

/**count task of individual */
exports.countIndividualTask = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.countRows({
    tableName: Table.task,
    columnName: "individualid",
    key: individual_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.individualTask = (req, res) => {
  const { individual_id, task_id } = req.params;
  IndividualService.findByValues({
    tableName: Table.task,
    columnNames: ["taskid", "individualid"],
    values: [task_id, individual_id],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateIndividualTask = (req, res) => {
  const { individual_id, task_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  IndividualService.update({
    tableName: Table.task,
    keys,
    values,
    columnNames: ["taskid", "individualid"],
    id: [task_id, individual_id],
  })
    .then((results) =>
      res.status(201).send(`Task details with id ${task_id} updated `)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteIndividualTask = (req, res) => {
  const { individual_id, task_id } = req.params;
  IndividualService.delete({
    tableName: Table.task,
    columnNames: ["taskid", "individualid"],
    values: [task_id, individual_id],
  })
    .then((results) => res.status(200).send(`Task with id ${task_id} delete`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.listIndividualTeams = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.findByValue({
    tableName: Table.team,
    columnName: "individualid",
    value: individual_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countIndividualTeams = (req, res) => {
  const { individual_id } = req.params;
  IndividualService.countRows({
    tableName: Table.team,
    columnName: "individualid",
    key: individual_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getIndividualTeam = (req, res) => {
  const { individual_id, team_id } = req.params;
  IndividualService.findByValues({
    tableName: Table.team,
    columnNames: ["teamid", "individualid"],
    values: [team_id, individual_id],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateIndividualTeam = (req, res) => {
  const { individual_id, team_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  IndividualService.update({
    tableName: Table.team,
    keys,
    values,
    columnNames: ["teamid", "individualid"],
    id: [team_id, individual_id],
  })
    .then((results) =>
      res.status(201).send(`Task details with id ${team_id} updated `)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteIndividualTeam = (req, res) => {
  const { individual_id, team_id } = req.params;
  IndividualService.delete({
    tableName: Table.team,
    columnNames: ["teamid", "individualid"],
    values: [team_id, individual_id],
  })
    .then((results) => res.status(200).send(`Task with id ${team_id} delete`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
