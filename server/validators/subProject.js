const yup = require("yup");

const { SUB_PROJECT_NAME_MIN, SUB_PROJECT_NAME_MAX } = require("./constraints");

const validateSubProjectSchema = async (data) => {
  const subProjectSchema = yup.object().shape({
    subProjectName: yup
      .string()
      .min(SUB_PROJECT_NAME_MIN)
      .max(SUB_PROJECT_NAME_MAX)
      .required(),
    supervisorId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
    projectId: yup.number().required().positive().integer(),
    projectManagerId: yup.number().required().positive().integer(),
  });
  return await subProjectSchema.validate(data, { abortEarly: false });
};

module.exports = { validateSubProjectSchema };
