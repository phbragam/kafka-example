const Jwt = require('jsonwebtoken');

const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const SuccessMessages = require('../utils/messages/successMessages.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');
const UserRepository = require('../repositories/userRepository.js');

// Business rules (complex validations)
const LoginService = {
  async login(data) {
    const foundUser = await UserRepository.findByName(data.username);
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

    const accessToken = Jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return {
      message: SuccessMessages.OPERATION_SUCCESSFUL,
      data: { accessToken },
      httpStatus: HttpStatusCodes.SUCCESS
    }
  }
}

module.exports = LoginService;
