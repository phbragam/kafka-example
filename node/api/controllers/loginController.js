const LoginService = require('../services/loginService.js');
const ControllerUtils = require('../utils/controllerUtils.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

// Direct validations
// Deal with request and response objects
const LoginController = {
    async login(req, res) {
        const { username, password } = req.body

        if (!username) {
            const missingField = 'username'
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        if (!password) {
            const missingField = 'password'
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        try {
            const response = await LoginService.login(req.body);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);

            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },
}

module.exports = LoginController;