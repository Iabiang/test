const yup = require("yup");
const { setLocale } = require("yup");

setLocale({
  mixed: {
    required: "Required field",
  },
});

const { PROJECT_NAME_MIN, PROJECT_NAME_MAX } = require("./constraints");

const validateProjectSchema = async (data) => {
  let error;
  let results;
  const projectSchema = yup.object().shape({
    projectName: yup
      .string()
      .min(
        PROJECT_NAME_MIN,
        `The project name must be atleast ${PROJECT_NAME_MIN} characters`
      )
      .max(PROJECT_NAME_MAX)
      .required(),
    projectManagerId: yup.number().required().positive().integer(),
    companyId: yup.number().required().positive().integer(),
  });
  try {
    results = await projectSchema.validate(data, { abortEarly: false });
  } catch (err) {
    error = err;
  }
  return { error, results };
};

module.exports = { validateProjectSchema };
