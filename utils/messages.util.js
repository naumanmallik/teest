module.exports = {
  invalidLogin: "Invalid email or password",
  InvalidToken: "Invalid token.",
  success: "Success!",
  notFound: (model) => {
    return `${model} does not exist!`;
  },
  badRequest: "Bad request",
  notPresent: "Not present in the payload",
  invalidFormat: (service) => {
    return `Invalid ${service} Format`;
  },
  invalidLength: "Invalid Length!",
  notEmpty: "This field must not be empty!",
  fileExists: "File already exists!",
  filesLengthExceeded: "File Limit Exceeded - Maximum 3 MB",
  fileTooLarge: "File size exceeds maximum limit 3 MB",
  invalidCode: "Invalid Code",
};
