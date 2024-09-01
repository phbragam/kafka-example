const Router = require('express');
const userController = require('../controllers/userController.js');

const router = Router();

// Maps urls to controllers methods
router.get('/user', (req, res) => {
    userController.findAll(req, res)
});
router.get('/user/:id', (req, res) => {
    userController.findById(req, res)
});
router.post('/user', (req, res) => {
    userController.create(req, res)
});
router.put('/user/:id', (req, res) => {
    userController.update(req, res)
});
router.delete('/user/:id', (req, res) =>{
    userController.delete(req, res)
});

module.exports = router;