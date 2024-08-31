const Tb01 = require('../models/tb01.js');

// Database interactions
const tb01Repository = {
    async findAll() {
        
    },

    async findById(id) {
        
    },

    async findByName(nome) {
        
    },

    async create(data) {
        const response = await Tb01.create(data);
        return response;
    },

    async update(id, data) {
        
    },

    async delete(id) {
        
    },

    getModelName() {
        return Tb01.name; // This will return the model name
    }
};

module.exports = tb01Repository;