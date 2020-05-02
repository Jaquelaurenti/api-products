const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
// Permitirque seja enviado arquivos JSon para aplicacao
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

// Fazendo o Require do Schema
requireDir('./src/models');

// consumindo a rota
app.use('/api', require('./src/routes'));

app.listen(3001);

