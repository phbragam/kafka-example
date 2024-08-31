const tb01Service = require('../services/tb01Service.js');
const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');

function formatServiceResponse(response) {
    const { httpStatus, error, ...formattedResponse } = response;
    return formattedResponse;
};

// Direct validations
// Deal with request and response objects
const tb01Controller = {
    async findAll(req, res) {

    },

    async findById(req, res) {

    },

    async create(req, res) {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ erro: ErrorMessages.MISSING_BODY });
        }

        const { col_texto } = req.body;

        if (!col_texto) {
            const missingField = "col_texto"
            return res.status(HttpStatusCodes.BAD_REQUEST).json({ erro: ErrorMessages.MISSING_FIELD(missingField) });
        }

        try {
            const response = await tb01Service.create(req.body);
            const formattedResponse = formatServiceResponse(response);

            return res.status(response.httpStatus).json({ response: formattedResponse });
        } catch (err) {
            return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ erro: err.message });
        }
    },

    async update(req, res) {

    },

    async delete(req, res) {

    }
}

module.exports = tb01Controller;