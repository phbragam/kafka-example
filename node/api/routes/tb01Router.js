const Router = require('express');
const tb01Controller = require('../controllers/tb01Controller.js');
const authentication = require('../middlewares/authenticationMiddleware.js');
const authorization = require('../middlewares/authorizationMiddlware.js');

const router = Router();

// Maps urls to controllers methods
router.get('/tb01', (req, res) => {
    tb01Controller.findAll(req, res)
});
router.get('/tb01/:id', (req, res) => {
    tb01Controller.findById(req, res)
});
router.post('/tb01', authentication, authorization('admin'), (req, res) => {
    tb01Controller.create(req, res)
});
router.put('/tb01/:id', (req, res) => {
    tb01Controller.update(req, res)
});
router.delete('/tb01/:id', (req, res) =>{
    tb01Controller.delete(req, res)
});

module.exports = router;