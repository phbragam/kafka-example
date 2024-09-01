const Router = require('express');
const Tb01Controller = require('../controllers/tb01Controller.js');
const authentication = require('../middlewares/authenticationMiddleware.js');
const authorization = require('../middlewares/authorizationMiddlware.js');

const router = Router();

// Maps urls to controllers methods
router.post('/tb01', authentication, authorization('admin'), (req, res) => {
    Tb01Controller.create(req, res)
});

module.exports = router;