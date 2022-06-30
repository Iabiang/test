const CompanyService = require("../services/queryService");
const { Table } = require("../models/listOfTables");

exports.listCompanies = (req, res) => {
  CompanyService.findAll({
    tableName: Table.company,
  })
    .then((results) => res.status(200).send(results.rows))
    .catch((e) => console.log(e));
};

exports.addCompany = (req, res) => {
  const keys = Object.keys(req.body);
  const values = Object.values(req.body);
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
