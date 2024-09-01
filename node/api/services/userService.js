const bcrypt = require('bcrypt');

const UserRepository = require('../repositories/userRepository.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

const thisEntity = UserRepository.getModelName().toLowerCase();

// Business rules (complex validations)
const UserService = {
  async findAll() {
    const response = await UserRepository.findAll();

    return {
      message: SuccessMessages.LIST_FOUND(thisEntity),
      data: response,
      httpStatus: HttpStatusCodes.SUCCESS
    };
  },

  async findById(id) {
    const response = await UserRepository.findById(id);
    if (!response) {
      return {
        message: ErrorMessages.NOT_FOUND(thisEntity, id),
        details: { id },
        httpStatus: HttpStatusCodes.NOT_FOUND
      };
    }

    return {
      message: SuccessMessages.FOUND(thisEntity),
      data: response,
      httpStatus: HttpStatusCodes.SUCCESS
    };
  },

  async create(data) {
    const existingUser = await UserRepository.findByName(data.username);

    if (existingUser) {
      const conflictingProperty = "username";

      return {
        message: ErrorMessages.CONFLICT(thisEntity, conflictingProperty),
        details: { username: data.username },
        httpStatus: HttpStatusCodes.CONFLICT
      };
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const createData = {
      username: data.username,
      password: hashedPassword,
      role: data.role
    }

    const response = await UserRepository.create(createData);

    return {
      message: SuccessMessages.CREATED(thisEntity),
      data: response,
      httpStatus: HttpStatusCodes.CREATED
    }
  },

  async update(id, data) {
    const existingUser = await UserRepository.findById(id);
    if (!existingUser) {
      return {
        message: ErrorMessages.NOT_FOUND(thisEntity, id),
        details: { id },
        httpStatus: HttpStatusCodes.NOT_FOUND
      };
    }
    const updateData = {};
    if(data.username){
      const conflictingUser = await UserRepository.findByName(data.username);
      if (conflictingUser && conflictingUser.id.toString() !== id) {
        const conflictingProperty = "username";
        return {
          message: ErrorMessages.CONFLICT(thisEntity, conflictingProperty),
          details: { username: data.username, id: conflictingUser.id },
          httpStatus: HttpStatusCodes.CONFLICT
        };
      }
      updateData.username = username;
    }

    if (data.role) {
      updateData.role = data.role;
    }

    await UserRepository.update(id, updateData);
    const updated = await UserRepository.findById(id);

    return {
      message: SuccessMessages.UPDATED(thisEntity),
      data: updated,
      httpStatus: HttpStatusCodes.SUCCESS
    };
  },

  async delete(id) {
    const deletedRowsCount = await UserRepository.delete(id);
    if (deletedRowsCount === 0) {
      return {
        message: ErrorMessages.NOT_FOUND(thisEntity, id),
        details: { id },
        httpStatus: HttpStatusCodes.NOT_FOUND
      };
    }
    return {
      message: SuccessMessages.DELETED(thisEntity),
      httpStatus: HttpStatusCodes.SUCCESS
    };
  }
}

module.exports = UserService;
