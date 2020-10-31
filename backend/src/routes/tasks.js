const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//Listar todos lembretes não concluidos
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

//Listar todos lembretes concluidos
router.get('/concluidos/:id_user', (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT L.id, L.dt_cadastro, L.dt_termino, L.titulo, L.descricao, L.concluido, U.nome 
            FROM lembretes AS L
            JOIN usuarios AS U ON U.id = L.usuario_id
            WHERE L.concluido = true AND U.id = ?`,
            [req.params.id_user],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
});

router.post('/create', (req, res, next) => {

    const tasks = {
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        titlle: req.body.title,
        description: req.body.description,
        concluded: false,
        user_id: req.body.user_id
    };

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `INSERT INTO lembretes (dt_cadastro, dt_termino, titulo, descricao, concluido, usuario_id) 
            VALUES (?, ?, ?, ?, FALSE, ?)`,
            [
                req.body.date_start,
                req.body.date_end,
                req.body.title,
                req.body.description,
                req.body.user_id
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error })}

                res.status(201).send({
                    mensagem: 'Lembrete criado com sucesso!',
                    id_lembrete: resultado.insertId
                });
            }
        ) 
    })
});

router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'DELETE FROM lembretes WHERE id = ?',
            [req.body.id],
            (error, resultado, field) => {
                if (error) { return res.status(202).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Usuário removido com sucesso!',
                });
            }
        )
    })
});

//Alterar status do projeto => (Fazer ainda o jeito de descobrir qual ID ta sendo passado)
router.put('/', (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'UPDATE lembretes SET concluido = true WHERE id = ?',
            [req.body.id],
            (error, resultado, field) => {
                if (error) { return res.status(202).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Lembrete alterado com sucesso!',
                })
            }
        )
    })
});

// Contador de lembretes
router.get('/', (rq, res, next) =>{
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT count(*)
            FROM lembretes AS L
            JOIN usuarios AS U ON u.id = L.usuario_id
            WHERE L.concluido = FALSE AND U.id = 1`
        )
    })
});


module.exports = router;