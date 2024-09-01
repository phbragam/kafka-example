const ErrorMessages = {
    // General
    MISSING_BODY: "Request body não pode ser vazio.",
    MISSING_FIELD: (field) => `O campo '${field}' é obrigatório.`,
    INTERNAL_ERROR: "Erro interno do servidor.",
    UNAUTHORIZED: "O usuário não está autenticado para realizar a operação.",
    FORBIDDEN: "O usuário não tem as permissões necessárias para realizar a operação.",

    // Http
    NOT_FOUND: (entity, id) => `Nenhum registro de ${entity} encontrado com o id '${id}'.`,
    CONFLICT: (entity, field) => `Um registro de ${entity} com esse '${field}' já existe.`,
  };
  
  module.exports = ErrorMessages;