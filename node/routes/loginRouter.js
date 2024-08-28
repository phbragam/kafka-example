const Router = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/login', (req, res) => {
    const username = req.body.username;
    const user = { name: username, role: 'admin' };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken });
});

module.exports = router;