const { serialize } = require("pg-protocol");
const { Table } = require("../models/listOfTables");
const SubProjectService = require("../services/queryService");
const { countListIndividuals } = require("./individualController");

exports.getSubProjectsList = (req, res) => {
  SubProjectService.findAll({
    tableName: Table.subproject,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.addSubproject = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SubProjectService.create({
    tableName: Table.subproject,
    keys: keys,
    values: values,
  })
    .then(() => res.status(201).send("Sub Project Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countSubProjects = (req, res) => {
  SubProjectService.countRows({
    tableName: Table.subproject,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getSubProjectDetails = (req, res) => {
  const { sub_project_id } = req.params;
  SubProjectService.findById({
    tableName: Table.subproject,
    columnName: "subprojectid",
    id: sub_project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateSubProject = (req, res) => {
  const { sub_project_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SubProjectService.update({
    tableName: Table.subproject,
    keys: keys,
    values: values,
    columnNames: ["subprojectid"],
    id: [sub_project_id],
  })
    .then(() =>
      res.status(201).send(`Sub Project with ID ${sub_project_id} updated`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getSubProjectTasks = (req, res) => {
  const { sub_project_id } = req.params;
  SubProjectService.findById({
    tableName: Table.task,
    columnName: "subprojectid",
    id: sub_project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        setImmediate;
      })
    );
};

exports.countSubProjectTasks = (req, res) => {
  const { sub_project_id } = req.params;
  SubProjectService.countRows({
    tableName: Table.task,
    columnName: "subprojectid",
    key: sub_project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setInterval(() => {
        throw err;
      })
    );
};

exports.getSubProjectTaskDetails = (req, res) => {
  const { sub_project_id, task_id } = req.params;
  SubProjectService.findByValues({
    tableName: Table.task,
    columnNames: ["subprojectid", "projectid"],
    values: [sub_project_id, task_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
