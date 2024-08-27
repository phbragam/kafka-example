require('dotenv').config()
const express = require('express');
const Tb01 = require('./models/tb01');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000

sequelize.sync();

app.post('/tb01', async (req, res) => {
    const { col_texto } = req.body;

    try {
        const newRecord = await Tb01.create({ col_texto });
        res.status(200).json(newRecord);
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        res.status(500).json({ error: 'Erro ao inserir dados na tabela.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});