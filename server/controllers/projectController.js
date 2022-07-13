// @ts-nocheck
const { Table } = require("../models/listOfTables");
const { validateProjectSchema } = require("../validators/project");
const ProjectService = require("../services/queryService");

exports.getProjectList = (req, res) => {
  ProjectService.findAll({
    tableName: Table.project,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.createProjectList = async (req, res) => {
  const { results, error } = await validateProjectSchema(req.body);
  if (error) return res.status(400).send(error.errors);
  const keys = Object.keys(results);
  const values = Object.values(results);
  ProjectService.create({
    tableName: Table.project,
    keys: keys,
    values: values,
  })
    .then((results) => res.status(201).send(`Project Created`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countProjects = (req, res) => {
  ProjectService.countRows({
    tableName: Table.project,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectDetails = (req, res) => {
  const { project_id } = req.params;
  ProjectService.findById({
    tableName: Table.project,
    columnName: "projectid",
    id: project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateProjectDetails = (req, res) => {
  const { project_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectService.update({
    tableName: Table.project,
    keys: keys,
    values: values,
    columnNames: ["projectid"],
    id: [project_id],
  })
    .then(() => res.status(201).send(`Project ID with updated ${project_id}`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteProject = (req, res) => {
  const { project_id } = req.params;
  ProjectService.delete({
    tableName: Table.subproject,
    columnNames: ["projectid"],
    values: project_id,
  })
    .then(() => res.status(200).send(`Project with ID ${project_id}`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectTasks = (req, res) => {
  const { project_id } = req.params;
  ProjectService.findById({
    tableName: Table.task,
    columnName: "projectid",
    id: project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countProjectTasks = (req, res) => {
  const { project_id } = req.params;
  ProjectService.countRows({
    tableName: Table.task,
    columnName: "projectid",
    key: project_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectTaskDetail = (req, res) => {
  const { project_id, task_id } = req.params;
  ProjectService.findByValues({
    tableName: Table.task,
    columnNames: ["projectid", "taskid"],
    values: [project_id, task_id],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateProjectTaskdetail = (req, res) => {
  const { project_id, task_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectService.update({
    tableName: Table.task,
    keys: keys,
    values: values,
    columnNames: ["projectid", "taskid"],
    id: [project_id, task_id],
    operator: "and",
  })
    .then(() => res.status(200).send(`Task with id ${task_id} Update`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteProjectTask = (req, res) => {
  const { project_id, task_id } = req.params;
  ProjectService.delete({
    tableName: Table.task,
    columnNames: ["projectid", "taskid"],
    values: [project_id, task_id],
    operator: "and",
  })
    .then(() => res.status(201).send(`task with id ${task_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
