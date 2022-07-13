// @ts-nocheck
const { Table } = require("../models/listOfTables");
const SubProjectService = require("../services/queryService");
const { validateSubProjectSchema } = require("../validators/subProject");

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

exports.addSubproject = async (req, res) => {
  const { results, error } = await validateSubProjectSchema(req.body);
  if (error) return res.status(400).send(error.errors);
  const keys = Object.keys(results);
  const values = Object.values(results);
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
    columnNames: ["subprojectid", "taskid"],
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

exports.updateSubProjectTask = (req, res) => {
  const { sub_project_id, task_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  SubProjectService.update({
    tableName: Table.task,
    keys: keys,
    values: values,
    columnNames: ["subprojectid", "projectid"],
    id: [sub_project_id, task_id],
  })
    .then(() => res.status(200).send(`Task with id ${task_id} updated`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteSubProjectTask = (req, res) => {
  const { sub_project_id, task_id } = req.params;
  SubProjectService.delete({
    tableName: Table.task,
    columnNames: ["subprojectid", "taskid"],
    values: [sub_project_id, task_id],
    operator: "and",
  })
    .then(() => res.status(200).send(`Task with id ${task_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
