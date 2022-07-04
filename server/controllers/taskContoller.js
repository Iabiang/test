const TaskService = require("../services/queryService");
const { Table } = require("../models/listOfTables");

exports.getTasks = (req, res) => {
  TaskService.findAll({
    tableName: Table.task,
  });
};
