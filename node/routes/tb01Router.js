const Router = require('express');
const tb01Controller = require('../controllers/tb01Controller.js');

const router = Router();

// Mapeia url para os metodos de controller apropriados
router.get('/tb01', (req, res) => {
    tb01Controller.findAll(req, res)
});
router.get('/tb01/:id', (req, res) => {
    tb01Controller.findById(req, res)
});
router.post('/tb01', (req, res) => {
    tb01Controller.create(req, res)
});
router.put('/tb01/:id', (req, res) => {
    tb01Controller.update(req, res)
});
router.delete('/tb01/:id', (req, res) =>{
    tb01Controller.delete(req, res)
});

module.exports = router;