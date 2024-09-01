const User = require('../models/user.js');

// Database interactions
const UserRepository = {
    async findAll() {
        const response = await User.findAll();
        return response;
    },

    async findById(id) {
        const response = await User.findByPk(id);
        return response;
    },

    async findByName(name) {
        const response = await User.findOne({
            where: { username: name }
        });
        return response;
    },

    async create(data) {
        const response = await User.create(data);
        return response;
    },

    async update(id, data) {
        const response = await User.update(data, {
            where: { id: id }
        });
        return response;
    },

    async delete(id) {
        const response = await User.destroy({
            where: { id: id }
        });
        return response;
    },

    getModelName() {
        return User.name; // This will return the model name
    }
};

module.exports = UserRepository;