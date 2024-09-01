const loginService = require('../services/loginService.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

function formatServiceResponse(response) {
    const { httpStatus, error, ...formattedResponse } = response;
    return formattedResponse;
};

// Direct validations
// Deal with request and response objects
const loginController = {
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
            const response = await loginService.login(req.body);
            const formattedResponse = formatServiceResponse(response);

            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },
}

module.exports = loginController;