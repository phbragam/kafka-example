const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

    const isPasswordValid = await bcrypt.compare(data.password, foundUser.password);
    if (!isPasswordValid) {
      return {
        message: ErrorMessages.UNOUTHORIZED_LOGIN,
        httpStatus: HttpStatusCodes.UNAUTHORIZED
      }
    }
    const user = { username: data.username, role: foundUser.role };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10min' });
    return {
      message: SuccessMessages.OPERATION_SUCCESSFUL,
      data: { accessToken },
      httpStatus: HttpStatusCodes.SUCCESS
    }
  }
}

module.exports = LoginService;
