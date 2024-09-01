const jwt = require('jsonwebtoken');

const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');
const userRepository = require('../repositories/userRepository.js');

// Business rules (complex validations)
const tb01Service = {
  async login(data) {
    const foundUser = await userRepository.findByName(data.username);
    if (!foundUser) {
      return {
        message: ErrorMessages.NOT_FOUND_LOGIN,
        details: { username: data.username },
        httpStatus: HttpStatusCodes.NOT_FOUND
      }
    }
    if (foundUser.password !== data.password) {
      return {
        message: ErrorMessages.UNOUTHORIZED_LOGIN,
        httpStatus: HttpStatusCodes.UNAUTHORIZED
      }
    }
    const user = { username: data.username, password: data.password, role: foundUser.role };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return {
      message: SuccessMessages.OPERATION_SUCCESSFUL,
      data: { accessToken },
      httpStatus: HttpStatusCodes.SUCCESS
    }
  }
}

module.exports = tb01Service;
