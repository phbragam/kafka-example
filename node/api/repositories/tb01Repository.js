const Tb01 = require('../models/tb01.js');

// Database interactions
const Tb01Repository = {
    async create(data) {
        const response = await Tb01.create(data);
        return response;
    },

    getModelName() {
        return Tb01.name; // This will return the model name
    }
};

module.exports = Tb01Repository;