const CompanyService = require("../services/queryService");
const { validateCompanySchema } = require("../validators/company");
const { Table } = require("../models/listOfTables");

exports.listCompanies = (req, res) => {
  CompanyService.findAll({
    tableName: Table.company,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((e) => console.log(e));
};

exports.addCompany = async (req, res) => {
  try {
    const results = await validateCompanySchema(req.body);
    const keys = Object.keys(results);
    const values = Object.values(results);
    CompanyService.create({
      tableName: Table.company,
      keys: keys,
      values: values,
    })
      .then(() => res.status(201).send("Company Created"))
      .catch((err) =>
        setImmediate(() => {
          throw err;
        })
      );
  } catch (error) {
    return res.status(400).send(error.errors);
  }
};

exports.getCompanyStatus = (req, res) => {
  const keys = Object.keys(req.query);
  const values = Object.values(req.query);
  CompanyService.findByStrings({
    tableName: Table.company,
    columnNames: keys,
    values: values,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyList = (req, res) => {
  CompanyService.countRows({
    tableName: Table.company,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyDetails = (req, res) => {
  const { company_id } = req.params;
  CompanyService.findById({
    tableName: Table.company,
    columnName: "companyid",
    id: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateCompanyDetails = (req, res) => {
  const { company_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  CompanyService.update({
    tableName: Table.company,
    keys: keys,
    values: values,
    columnNames: ["companyid"],
    id: [company_id],
  })
    .then(() => res.status(201).send(`Company with ID ${company_id} updated`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteCompany = (req, res) => {
  const { company_id } = req.params;
  CompanyService.delete({
    tableName: Table.company,
    columnNames: ["companyid"],
    values: [company_id],
  })
    .then(() => res.status(200).send(`Company with ID ${company_id} deleted`))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyIndividuals = (req, res) => {
  const { company_id } = req.params;
  CompanyService.findByValue({
    tableName: Table.individual,
    columnName: "companyid",
    value: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countCompanyIndividuals = (req, res) => {
  const { company_id } = req.params;
  CompanyService.countRows({
    tableName: Table.individual,
    columnName: "companyid",
    key: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyIndividualsDetails = (req, res) => {
  const { company_id, individual_id } = req.params;
  CompanyService.findByValues({
    tableName: Table.individual,
    columnNames: ["companyid", "individualid"],
    values: [company_id, individual_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateCompanyIndividualsDetails = (req, res) => {
  const { company_id, individual_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  CompanyService.update({
    tableName: Table.individual,
    keys: keys,
    values: values,
    columnNames: ["companyid", "individualid"],
    id: [company_id, individual_id],
  })
    .then(() =>
      res
        .status(200)
        .send(
          `Individual with company ID ${company_id} and individual ID ${individual_id} updated`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteCompanyIndividual = (req, res) => {
  const { company_id, individual_id } = req.params;
  CompanyService.delete({
    tableName: Table.individual,
    columnNames: ["companyid", "individualid"],
    values: [company_id, individual_id],
  })
    .then(() =>
      res
        .status(200)
        .send(
          `Individual with company ID ${company_id} and individual ID ${individual_id} deleted`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyProjectManagers = (req, res) => {
  const { company_id } = req.params;
  CompanyService.findById({
    tableName: Table.projectManager,
    columnName: "companyid",
    id: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countCompanyProjectMangers = (req, res) => {
  const { company_id } = req.params;
  CompanyService.countRows({
    tableName: Table.projectManager,
    columnName: "companyid",
    key: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanyProjectManagerDetails = (req, res) => {
  const { company_id, project_manager_id } = req.params;
  CompanyService.findByValues({
    tableName: Table.projectManager,
    columnNames: ["companyid", "projectmanagerid"],
    values: [company_id, project_manager_id],
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateCompanyProjectManagerDetails = (req, res) => {
  const { company_id, project_manager_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  CompanyService.update({
    tableName: Table.projectManager,
    keys: keys,
    values: values,
    columnNames: ["companyid", "projectmanagerid"],
    id: [company_id, project_manager_id],
  })
    .then(() =>
      res
        .status(200)
        .send(
          `Project Manager with company id ${company_id} and project Manager id ${project_manager_id} updated`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteCompanyProjectManager = (req, res) => {
  const { company_id, project_manager_id } = req.params;
  CompanyService.delete({
    tableName: Table.projectManager,
    columnNames: ["companyid", "projectmanagerid"],
    values: [company_id, project_manager_id],
    operator: "and",
  })
    .then(() =>
      res
        .status(200)
        .send(
          `Project Manager with company id ${company_id} and project Manager id ${project_manager_id} Deleted`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanySupervisors = (req, res) => {
  const { company_id } = req.params;
  CompanyService.findById({
    tableName: Table.supervisor,
    columnName: "companyid",
    id: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.countCompanySupervisor = (req, res) => {
  const { company_id } = req.params;
  CompanyService.countRows({
    tableName: Table.supervisor,
    columnName: "companyid",
    key: company_id,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.getCompanySupervisorDetails = (req, res) => {
  const { company_id, supervisor_id } = req.params;
  CompanyService.findByValues({
    tableName: Table.supervisor,
    columnNames: ["companyid", "supervisorid"],
    values: [company_id, supervisor_id],
    operator: "and",
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.updateCompanySupervisorDetails = (req, res) => {
  const { company_id, supervisor_id } = req.params;
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
  CompanyService.update({
    tableName: Table.supervisor,
    keys: keys,
    values: values,
    columnNames: ["companyid", "supervisorid"],
    id: [company_id, supervisor_id],
  })
    .then(() =>
      res
        .status(200)
        .send(
          `Supervisor with company id ${company_id} and supervisor id ${supervisor_id} updated`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.deleteCompanySupervisor = (req, res) => {
  const { company_id, supervisor_id } = req.params;
  CompanyService.delete({
    tableName: Table.supervisor,
    columnNames: ["companyid", "supervisorid"],
    values: [company_id, supervisor_id],
    operator: "and",
  })
    .then(() =>
      res
        .status(200)
        .send(
          `supervisor with company id ${company_id} and supervisor id ${supervisor_id} Deleted`
        )
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};
