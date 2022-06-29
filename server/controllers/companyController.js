const CompanyService = require("../services/queryService");
const { Table } = require("../models/listOfTables");

exports.listCompanies = (req, res) => {
  CompanyService.findAll({
    tableName: Table.company,
  })
    .then((results) => res.send(results.rows))
    .catch((e) => console.log(e));
};
