const User = require('../models/user.js');

// Database interactions
const UserRepository = {
    async findAll() {
        const response = await User.findAll({
            attributes: { exclude: ['password'] }
        });
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
        const responseObject = response.toJSON();
        delete responseObject.password;
        return responseObject;
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
        return User.name;
    }
};

module.exports = UserRepository;