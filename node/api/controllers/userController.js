const userService = require('../services/userService.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

function formatServiceResponse(response) {
    const { httpStatus, ...formattedResponse } = response;
    return formattedResponse;
};

// Direct validations
// Deal with request and response objects
const userController = {
    async findAll(req, res) {
        try {
            const response = await userService.findAll();
            const formattedResponse = formatServiceResponse(response);
            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    },

    async findById(req, res) {
        try {
            const response = await userService.findById(req.params.id);
            const formattedResponse = formatServiceResponse(response);
            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    },

    async create(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_BODY });
        }

        const { username, password, role } = req.body;

        if (!username) {
            const missingField = "username"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_FIELD(missingField) });
        }

        if (!password) {
            const missingField = "password"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_FIELD(missingField) });
        }

        if (!role) {
            const missingField = "role"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_FIELD(missingField) });
        }

        try {
            const response = await userService.create(req.body);
            const formattedResponse = formatServiceResponse(response);

            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    },

    async update(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_BODY });
        }

        try {
            const response = await userService.update(req.params.id, req.body);
            const formattedResponse = formatServiceResponse(response);
            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const response = await userService.delete(req.params.id);
            const formattedResponse = formatServiceResponse(response);
            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    }
}

module.exports = userController;