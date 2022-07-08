const yup = require("yup");

const {
  COMPANY_NAME_MIN,
  COMPANY_NAME_MAX,
  PHONENO_MIN,
  PHONENO_MAX,
} = require("./constraints");

const validateCompanySchema = async (data) => {
  let error;
  let results;
  let companySchema = yup.object().shape({
    companyName: yup
      .string()
      .min(
        COMPANY_NAME_MIN,
        `The company name must be atleast ${COMPANY_NAME_MIN} characters`
      )
      .max(COMPANY_NAME_MAX)
      .required(),
    companyPhoneNo: yup
      .string()
      .min(PHONENO_MIN, "Minimum 10 numbers required")
      .max(PHONENO_MAX)
      .required(),
    companyEmailId: yup.string().email("Email is not valid"),
    status: yup
      .string()
      .matches(
        /(Active|Inactive)$/,
        "Status must either be Active or Inactive"
      ),
  });
  try {
    results = await companySchema.validate(data, { abortEarly: false });
  } catch (err) {
    error = err;
  }
  return { error, results };
};

module.exports = { validateCompanySchema };
