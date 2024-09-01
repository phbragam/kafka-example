const SuccessMessages = {
  LIST_FOUND: (entity) => `Registros da tabela ${entity} retornados com sucesso.`,
  FOUND: (entity) => `Registro da tabela ${entity} encontrado(a) com sucesso.`,
  CREATED: (entity) => `Registro da tabela ${entity} criado com sucesso.`,
  UPDATED: (entity) => `Registro da tabela ${entity} atualizado(a) com sucesso.`,
  DELETED: (entity) => `Registro da tabela ${entity} deletado(a) com sucesso.`,
  OPERATION_SUCCESSFUL: "Operação realizada com sucesso.",
};

module.exports = SuccessMessages;