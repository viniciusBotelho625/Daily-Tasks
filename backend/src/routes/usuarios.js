const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de usuarios'
    });
});

router.post('/', (req, res, next) => {

    const usuario = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    res.status(201).send({
        mensagem: 'Usando o Post dentro da rota de usuarios',
        usuarioCriado: usuario
    });
});

router.delete('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        mensagem: 'Usando o DELETE com um usuário exclusivo',
        id: id
    });
});

router.put('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        mensagem: 'Usando o PUT com um usuário exclusivo',
        id: id
    });
});

module.exports = router;