const Router = require('express');
const tb01Controller = require('../controllers/tb01Controller.js');
const authentication = require('../middlewares/authenticationMiddleware.js');
const authorization = require('../middlewares/authorizationMiddlware.js');

const router = Router();

// Maps urls to controllers methods
router.post('/tb01', authentication, authorization('admin'), (req, res) => {
    tb01Controller.create(req, res)
});

module.exports = router;