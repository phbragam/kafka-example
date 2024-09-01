const Tb01Service = require('../services/tb01Service.js');
const ControllerUtils = require('../utils/controllerUtils.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

// Direct validations
// Deal with request and response objects
const Tb01Controller = {
    async create(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_BODY });
        }

        const { col_texto } = req.body;

        if (!col_texto) {
            const missingField = "col_texto"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        try {
            const response = await Tb01Service.create(req.body);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);

            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },
}

module.exports = Tb01Controller;