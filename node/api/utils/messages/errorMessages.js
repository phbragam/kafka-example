const ErrorMessages = {
  // General
  MISSING_BODY: "Request body cannot be empty.",
  MISSING_FIELD: (field) => `The field '${field}' is required.`,
  INTERNAL_ERROR: "Internal server error.",
  UNAUTHORIZED: "The user is not authenticated to perform the operation.",
  FORBIDDEN: "The user does not have the necessary permissions to perform the operation.",

  // Http
  NOT_FOUND: (entity, id) => `No record found in the ${entity} table with the id '${id}'.`,
  CONFLICT: (entity, field) => `A record in the ${entity} table with this '${field}' already exists.`,
};

module.exports = ErrorMessages;