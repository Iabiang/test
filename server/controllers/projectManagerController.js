const { Table } = require("../models/listOfTables");
const {
  validateProjectManagerSchema,
} = require("../validators/projectManager");
const ProjectManagerService = require("../services/queryService");

exports.listProjectManagers = (req, res) => {
  ProjectManagerService.findAll({
    tableName: Table.projectManager,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.addProjectManager = async (req, res) => {
  try {
    const results = await validateProjectManagerSchema(req.body);
    const keys = Object.keys(results);
    const values = Object.values(results);
    ProjectManagerService.create({
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
  } catch (error) {
    return res.status(400).send(error.errors);
  }
};

exports.countProjectMangers = (req, res) => {
  ProjectManagerService.countRows({
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
  ProjectManagerService.findById({
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
  ProjectManagerService.update({
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
  ProjectManagerService.delete({
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
  ProjectManagerService.findById({
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

exports.countProjectManagerProjects = (req, res) => {
  const { project_manager_id } = req.params;
  ProjectManagerService.countRows({
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
  ProjectManagerService.findByValues({
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
  ProjectManagerService.update({
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
  ProjectManagerService.delete({
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
  ProjectManagerService.findById({
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
  ProjectManagerService.countRows({
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
  ProjectManagerService.findByValues({
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
  ProjectManagerService.update({
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
  ProjectManagerService.delete({
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
