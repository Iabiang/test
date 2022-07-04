const { Table } = require("../models/listOfTables");
const ProjectMangerService = require("../services/queryService");

exports.listProjectMangers = (req, res) => {
  ProjectMangerService.findAll({
    tableName: Table.projectManager,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.addProjectManger = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectMangerService.create({
    tableName: Table.projectManager,
    keys: keys,
    values: values,
  })
    .then(() => res.status(201).send("Project Manager Created"))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countProjectMangers = (req, res) => {
  ProjectMangerService.countRows({
    tableName: Table.projectManager,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectManagerDetails = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.findById({
    tableName: Table.projectManager,
    columnName: "projectmanagerid",
    id: project_manager_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateProjectManagerDetails = (req, res) => {
  const { project_manager_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectMangerService.update({
    tableName: Table.projectManager,
    keys: keys,
    values: values,
    columnNames: ["projectmanagerid"],
    id: project_manager_id,
  })
    .then(() =>
      res
        .status(201)
        .send(`Project Manager with id ${project_manager_id} updated`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteProjectManager = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.delete({
    tableName: Table.projectManager,
    columnNames: ["projectmanagerid"],
    values: [project_manager_id],
  })
    .then(() =>
      res
        .status(200)
        .send(`Project Manager with id ${project_manager_id} deleted`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectManagerProjects = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.findById({
    tableName: Table.project,
    columnName: "projectid",
    id: project_manager_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countProjectMangerProjects = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.countRows({
    tableName: Table.project,
    columnName: "projectmanagerid",
    key: project_manager_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectManagerProject = (req, res) => {
  const { project_manager_id, project_id } = req.params;
  ProjectMangerService.findByValues({
    tableName: Table.project,
    columnNames: ["projectmanagerid", "projectid"],
    values: [project_manager_id, project_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateProjectManagerProject = (req, res) => {
  const { project_manager_id, project_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectMangerService.update({
    tableName: Table.project,
    keys: keys,
    values: values,
    columnNames: ["projectmanagerid", "projectid"],
    id: [project_manager_id, project_id],
  })
    .then((results) =>
      res.status(201).send(`Project with id ${project_id} updated`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteProjectManagerProject = (req, res) => {
  const { project_manager_id, project_id } = req.params;
  ProjectMangerService.delete({
    tableName: Table.project,
    columnNames: ["projectmanagerid", "projectid"],
    values: [project_manager_id, project_id],
    operator: "and",
  })
    .then(() => res.status(200).send(`Project with id ${project_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectManagerSubProjects = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.findById({
    tableName: Table.subproject,
    columnName: "projectmanagerid",
    id: project_manager_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countProjectManagerSubprojects = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectMangerService.countRows({
    tableName: Table.subproject,
    columnName: "projectmanagerid",
    key: project_manager_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getProjectManagerSubProjectDetails = (req, res) => {
  const { project_manager_id, sub_project_id } = req.params;
  ProjectMangerService.findByValues({
    tableName: Table.subproject,
    columnNames: ["projectmanagerid", "subprojectid"],
    values: [project_manager_id, sub_project_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateProjectManagerSubProjectDetails = (req, res) => {
  const { project_manager_id, sub_project_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  ProjectMangerService.update({
    tableName: Table.subproject,
    keys: keys,
    values: values,
    columnNames: ["projectmanagerid", "subprojectid"],
    id: [project_manager_id, sub_project_id],
  })
    .then(() =>
      res.status(201).send(`Sub Project with id ${sub_project_id} updated`)
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteProjectManagerSubproject = (req, res) => {
  const { project_manager_id, sub_project_id } = req.params;
  ProjectMangerService.delete({
    tableName: Table.subproject,
    columnNames: ["projectmanagerid", "subprojectid"],
    values: [project_manager_id, sub_project_id],
    operator: "and",
  })
    .then(() =>
      res.status(200).send(`Sub Project with id ${sub_project_id} deleted`)
    )
    .catch((err) =>
      setImmediate((err) => {
        throw err;
      })
    );
};
