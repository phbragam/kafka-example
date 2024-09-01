const Router = require('express');
const LoginController = require('../controllers/loginController.js')

const router = Router();

router.post('/login', async (req, res) => {
    LoginController.login(req, res)
});

module.exports = router;