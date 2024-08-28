const ErrorMessages = {
    // Geral
    MISSING_BODY: "Request body não pode ser vazio.",
    MISSING_FIELD: (field) => `O campo '${field}' é obrigatório.`,
    INTERNAL_ERROR: "Erro interno do servidor.",

    // Crud
    CREATE_ERROR: (entity) => `Erro ao criar registro em ${entity}.`,
  };
  
  module.exports = ErrorMessages;