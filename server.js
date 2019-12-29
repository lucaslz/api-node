const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando a API
const app = express();
app.use(express.json());
app.use(cors());

// Criando conexao com o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

//Carregando as models
requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);