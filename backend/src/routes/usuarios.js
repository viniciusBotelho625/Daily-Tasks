const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de usuarios'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o Post dentro da rota de usuarios'
    });
});

router.get('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        mensagem: 'Usando o Get com um usuário exclusivo',
        id: id
    });
});

router.put('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        mensagem: 'Usando o Get com um usuário exclusivo',
        id: id
    });
});

router.put('/:id_user', (req, res, next) => {
    const id = req.params.id_user
    res.status(200).send({
        mensagem: 'Usando o Get com um usuário exclusivo',
        id: id
    });
});
module.exports = router;