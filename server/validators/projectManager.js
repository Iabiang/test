const yup = require("yup");

const {
  FIRSTNAME_MIN,
  FIRSTNAME_MAX,
  MIDDLENAME_MIN,
  MIDDLENAME_MAX,
  LASTNAME_MIN,
  LASTNAME_MAX,
  PHONENO_MIN,
  PHONENO_MAX,
} = require("./constraints");

const validateProjectManagerSchema = async (data) => {
  const projectManagerSchema = yup.object().shape({
    firstName: yup.string().min(FIRSTNAME_MIN).max(FIRSTNAME_MAX).required(),
    middleName: yup.string().min(MIDDLENAME_MIN).max(MIDDLENAME_MAX),
    lastName: yup.string().min(LASTNAME_MIN).max(LASTNAME_MAX).required(),
    gender: yup
      .string()
      .matches(/(Male|Female|Others)$/)
      .required(),
    //dob: yup.date().required(),
    emailId: yup.string().email(),
    phoneNo: yup.string().min(PHONENO_MIN).max(PHONENO_MAX).required(),
    tokenId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
  });

  return await projectManagerSchema.validate(data, { abortEarly: false });
};

module.exports = { validateProjectManagerSchema };
