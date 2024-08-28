require('dotenv').config()
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/index.js');

const app = express();
app.use(express.json());
routes(app)
const PORT = process.env.PORT || 3000

sequelize.sync();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});