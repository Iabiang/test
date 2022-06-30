const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router
  .route("/")
  .get(companyController.listCompanies)
  .post(companyController.addCompany);

router.route("/findbystatus").get(companyController.getCompanyStatus);

router.route("/count").get(companyController.getCompanyList);

router
  .route("/:company_id")
  .get(companyController.getCompanyDetails)
  .put(companyController.updateCompanyDetails)
  .delete(companyController.deleteCompany);

router
  .route("/:company_id/individuals")
  .get(companyController.getCompanyIndividuals);

router
  .route("/:company_id/individuals/count")
  .get(companyController.countCompanyIndividuals);

router
  .route("/:company_id/individuals/:individual_id")
  .get(companyController.getCompanyIndividualsDetails)
  .put(companyController.updateCompanyIndividualsDetails)
  .delete(companyController.deleteCompanyIndividual);

router
  .route("/:company_id/project_managers")
  .get(companyController.getCompanyProjectManagers);

router
  .route("/:company_id/project_managers/count")
  .get(companyController.countCompanyProjectMangers);

router
  .route("/:company_id/project_managers/:project_manager_id")
  .get(companyController.getCompanyProjectManagerDetails)
  .put(companyController.updateCompanyProjectManagerDetails)
  .delete(companyController.deleteCompanyProjectManager);

router
  .route("/:company_id/supervisors")
  .get(companyController.getCompanySupervisors);

router
  .route("/:company_id/supervisors/count")
  .get(companyController.countCompanySupervisor);

router
  .route("/:company_id/supervisors/:supervisor_id")
  .get(companyController.getCompanySupervisorDetails)
  .put(companyController.updateCompanySupervisorDetails)
  .delete(companyController.deleteCompanySupervisor);
module.exports = router;
