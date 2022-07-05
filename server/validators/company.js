const yup = require("yup");

const {
  COMPANY_NAME_MIN,
  COMPANY_NAME_MAX,
  PHONENO_MIN,
  PHONENO_MAX,
} = require("./constraints");

const validateCompanySchema = async (data) => {
  let companySchema = yup.object().shape({
    companyName: yup
      .string()
      .min(COMPANY_NAME_MIN)
      .max(COMPANY_NAME_MAX)
      .required(),
    companyPhoneNo: yup.string().min(PHONENO_MIN).max(PHONENO_MAX).required(),
    companyEmailId: yup.string().email(),
    status: yup.string().matches(/(Active|Inactive)$/),
  });

  return await companySchema.validate(data, { abortEarly: false });
};

module.exports = { validateCompanySchema };
