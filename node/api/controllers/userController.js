const UserService = require('../services/userService.js');
const ControllerUtils = require('../utils/controllerUtils.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

// Direct validations
// Deal with request and response objects
const UserController = {
    async findAll(req, res) {
        try {
            const response = await UserService.findAll();
            const formattedResponse = ControllerUtils.formatServiceResponse(response);
            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },

    async findById(req, res) {
        try {
            const response = await UserService.findById(req.params.id);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);
            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },

    async create(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_BODY });
        }

        const { username, password, role } = req.body;

        if (!username) {
            const missingField = "username"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        if (!password) {
            const missingField = "password"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        if (!role) {
            const missingField = "role"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_FIELD(missingField) });
        }

        try {
            const response = await UserService.create(req.body);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);

            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },

    async update(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ msg: ErrorMessages.MISSING_BODY });
        }

        try {
            const response = await UserService.update(req.params.id, req.body);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);
            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    },

    async delete(req, res) {
        try {
            const response = await UserService.delete(req.params.id);
            const formattedResponse = ControllerUtils.formatServiceResponse(response);
            return res.status(response.httpStatus).json(formattedResponse);
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
        }
    }
}

module.exports = UserController;