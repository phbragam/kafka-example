const tb01Repository = require('../repositories/tb01Repository.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');

const thisEntity = tb01Repository.getModelName().toLowerCase();

// Regras de negócio (validações mais complexas)
const tb01Service = {
  async findAll() {
    
  },

  async findById(id) {
    
  },

  async create(data) {
      const response = await tb01Repository.create(data);
      
      return { 
        message: SuccessMessages.CREATED(thisEntity), 
        data: response,
        httpStatus: HttpStatusCodes.CREATED
      }
  },

  async update(id, data) {
    
  },

  async delete(id) {
    
  }
}

module.exports = tb01Service;
