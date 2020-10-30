const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


router.get('/:id_user', (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT L.id, L.dt_cadastro, L.dt_termino, L.titulo, L.descricao, L.concluido, U.nome 
            FROM lembretes AS L
            JOIN usuarios AS U ON U.id = L.usuario_id
            WHERE L.concluido = false AND U.id = ?`,
            [req.params.id_user],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
});

module.exports = router;