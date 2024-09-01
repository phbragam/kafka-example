const Router = require('express');
const loginController = require('../controllers/loginController.js')

const router = Router();

router.post('/login', async (req, res) => {
    loginController.login(req, res)
});

module.exports = router;