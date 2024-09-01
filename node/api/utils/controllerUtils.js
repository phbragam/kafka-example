
const ControllerUtils = {
    formatServiceResponse(response) {
        const { httpStatus, ...formattedResponse } = response;
        return formattedResponse;
    }
}

module.exports = ControllerUtils;