const Router = require('express');
const jwt = require('jsonwebtoken');

const HttpStatusCodes = require('../utils/constants/httpStatusCodes.js');
const ErrorMessages = require('../utils/messages/errorMessages.js');
const userRepository = require('../repositories/userRepository.js');

const router = Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    if(!username) {
        const missingField = 'username'
        return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_FIELD(missingField) });
    }

    if(!password) {
        const missingField = 'password'
        return res.status(HttpStatusCodes.BAD_REQUEST).json({ error: ErrorMessages.MISSING_FIELD(missingField) });
    }

    const foundUser = await userRepository.findByName(username);
    if(!foundUser) return res.status(HttpStatusCodes.NOT_FOUND).json({error: ErrorMessages.NOT_FOUND_LOGIN});

    if(foundUser.password !== password) return res.status(HttpStatusCodes.UNAUTHORIZED).json({error: ErrorMessages.UNOUTHORIZED_LOGIN});
    const user = { username: username, password: password, role: foundUser.role };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.status(HttpStatusCodes.SUCCESS).json({ accessToken });
});

module.exports = router;