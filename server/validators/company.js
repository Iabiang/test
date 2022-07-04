const yup = require("yup");

const {
  COMPANYNAME_MIN,
  COMPANYNAME_MAX,
  PHONENO_MIN,
  PHONENO_MAX,
} = require("./constraints");

const validateCompanySchema = async (data) => {
  const companySchema = yup.object().shape({
    companyName: yup
      .string()
      .min(COMPANYNAME_MIN)
      .max(COMPANYNAME_MAX)
      .required(),
    companyPhoneNo: yup.string().min(PHONENO_MIN).max(PHONENO_MAX).required(),
    companyEmailId: yup.string().email(),
    status: yup.string().matches(/(Active|Inactive)$/),
  });

  return await companySchema.validate(data, { abortEarly: false });
};

module.exports = { validateCompanySchema };
