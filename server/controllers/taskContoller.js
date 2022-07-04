const TaskService = require("../services/queryService");
const { Table } = require("../models/listOfTables");

exports.getTasks = (req, res) => {
  TaskService.findAll({
    tableName: Table.task,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.createTask = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  TaskService.create({
    tableName: Table.task,
    keys: keys,
    values: values,
  })
    .then(() => res.status(201).send("Task Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getTaskByActionStatus = (req, res) => {
  const { status } = req.query;
  TaskService.findByStrings({
    tableName: Table.task,
    columnNames: ["taskstatus"],
    values: [status],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countTasks = (req, res) => {
  TaskService.countRows({
    tableName: Table.task,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getTaskDetails = (req, res) => {
  const { task_id } = req.params;
  TaskService.findById({
    tableName: Table.task,
    columnName: "taskid",
    id: task_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateTaskDetails = (req, res) => {
  const { task_id } = req.params;
  const keys = Object.keys(req.body);
  const value = Object.values(req.body);
  TaskService.update({
    tableName: Table.task,
    keys: keys,
    values: value,
    columnNames: ["taskid"],
    id: task_id,
  })
    .then(() => res.status(200).send(`Task with ID ${task_id} updated`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteTask = (req, res) => {
  const { task_id } = req.params;
  TaskService.delete({
    tableName: Table.task,
    columnNames: ["taskid"],
    values: [task_id],
  })
    .then(() => res.status(200).send(`Task with ID ${task_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
