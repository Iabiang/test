const yup = require("yup");

const { SUB_PROJECT_NAME_MIN, SUB_PROJECT_NAME_MAX } = require("./constraints");

const validateSubProjectSchema = async (data) => {
  let error;
  let results;
  const subProjectSchema = yup.object().shape({
    subProjectName: yup
      .string()
      .min(
        SUB_PROJECT_NAME_MIN,
        `The sub project name must be atleast ${SUB_PROJECT_NAME_MIN} characters`
      )
      .max(SUB_PROJECT_NAME_MAX)
      .required(),
    supervisorId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
    projectId: yup.number().required().positive().integer(),
    projectManagerId: yup.number().required().positive().integer(),
  });
  try {
    results = await subProjectSchema.validate(data, { abortEarly: false });
  } catch (err) {
    error = err;
  }
  return { error, results };
};

module.exports = { validateSubProjectSchema };
