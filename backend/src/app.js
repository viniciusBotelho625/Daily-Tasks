const express = require('express');
const app = express();

const routesUsers = require('./routes/usuarios');

app.use('/users', routesUsers);

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo!'
    });
});


module.exports = app;
