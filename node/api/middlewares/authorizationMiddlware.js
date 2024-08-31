const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages');

function authorizeRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(HttpStatusCodes.FORBIDDEN).json({erro: ErrorMessages.FORBIDDEN}); 
        }
        next();
    };
}

module.exports =  authorizeRole ;