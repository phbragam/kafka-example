const tb01Repository = require('../repositories/tb01Repository.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');
const producer = require('../services/kafka/producer.js');

const thisEntity = tb01Repository.getModelName().toLowerCase();

// Business rules (complex validations)
const tb01Service = {
  async create(data) {
      const response = await tb01Repository.create(data);

      // writing on Kafka topic
      const message = response?.col_texto;
      await producer.send({
          topic: 'tb01.post',
          messages: [{ value: message }],
      });
      
      return { 
        message: SuccessMessages.CREATED(thisEntity), 
        data: response,
        httpStatus: HttpStatusCodes.CREATED
      }
  }
}

module.exports = tb01Service;
