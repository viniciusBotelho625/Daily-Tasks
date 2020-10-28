const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

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

    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
            [req.body.name, req.body.email, req.body.password],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Usuário criado com sucesso!',
                    id_usuario: resultado.insertId
                });
            }
        )
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