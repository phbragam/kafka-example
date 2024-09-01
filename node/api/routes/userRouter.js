const Router = require('express');
const UserController = require('../controllers/userController.js');

const router = Router();

// Maps urls to controllers methods
router.get('/user', (req, res) => {
    UserController.findAll(req, res)
});
router.get('/user/:id', (req, res) => {
    UserController.findById(req, res)
});
router.post('/user', (req, res) => {
    UserController.create(req, res)
});
router.put('/user/:id', (req, res) => {
    UserController.update(req, res)
});
router.delete('/user/:id', (req, res) =>{
    UserController.delete(req, res)
});

module.exports = router;