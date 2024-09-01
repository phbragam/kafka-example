const SuccessMessages = {
  LIST_FOUND: (entity) => `Records from the ${entity} table successfully retrieved.`,
  FOUND: (entity) => `${entity} table record successfully found.`,
  CREATED: (entity) => `${entity} table record successfully created.`,
  UPDATED: (entity) => `${entity} table record successfully updated.`,
  DELETED: (entity) => `${entity} table record successfully deleted.`,
  OPERATION_SUCCESSFUL: "Operation successfully completed.",
};

module.exports = SuccessMessages;