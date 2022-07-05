const yup = require("yup");

const { PROJECT_NAME_MIN, PROJECT_NAME_MAX } = require("./constraints");

const validateProjectSchema = async (data) => {
  const projectSchema = yup.object().shape({
    projectName: yup
      .string()
      .min(PROJECT_NAME_MIN)
      .max(PROJECT_NAME_MAX)
      .required(),
    projectManagerId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
  });
  return await projectSchema.validate(data, { abortEarly: false });
};

module.exports = { validateProjectSchema };
