const Tb01Repository = require('../repositories/tb01Repository.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');
const Producer = require('../services/kafka/producer.js');

const thisEntity = Tb01Repository.getModelName().toLowerCase();

// Business rules (complex validations)
const Tb01Service = {
  async create(data) {
      const response = await Tb01Repository.create(data);

      // writing on Kafka topic
      const message = response?.col_texto;
      await Producer.send({
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

module.exports = Tb01Service;
