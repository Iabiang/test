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
  let error;
  let results;
  const projectManagerSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(
        FIRSTNAME_MIN,
        `The first name must be atleast ${FIRSTNAME_MIN} characters`
      )
      .max(FIRSTNAME_MAX)
      .required(),
    middleName: yup
      .string()
      .min(
        MIDDLENAME_MIN,
        `The middle name must be atleast ${MIDDLENAME_MIN} characters`
      )
      .max(MIDDLENAME_MAX),
    lastName: yup
      .string()
      .min(
        LASTNAME_MIN,
        `The last name must be atleast ${LASTNAME_MIN} characters`
      )
      .max(LASTNAME_MAX)
      .required(),
    gender: yup
      .string()
      .matches(
        /(Male|Female|Others)$/,
        "Gender must match one of the following: Male, Female or Others"
      )
      .required(),
    dob: yup.date().required(),
    emailId: yup.string().email("Email is not valid"),
    phoneNo: yup
      .string()
      .min(PHONENO_MIN, "Minimum 10 numbers required")
      .max(PHONENO_MAX)
      .required(),
    tokenId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
  });
  try {
    results = await projectManagerSchema.validate(data, { abortEarly: false });
  } catch (err) {
    error = err;
  }
  return { error, results };
};

module.exports = { validateProjectManagerSchema };
