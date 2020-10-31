const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');


router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'SELECT * FROM usuarios',
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
});


router.post('/create', (req, res, next) => {
    mysql.getConnection((err, conn) => {
        if (err) { return res.status(500).send({ error: error }) }
        conn.query('SELECT * FROM usuarios WHERE email = ?', [req.body.email], (error, results) =>{
            if (error) { return res.status(500).send({ error: error })}
            if (results.length > 0) {
                res.status(409).send({mensagem: 'Usuário já cadastrado' })
            } else {
                bcrypt.hash(req.body.password, 10, (errBcript, hash) => {
                    if (errBcript) {return res.status(500).send({ error: errBcript}) }
                    conn.query(
                        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
                        [req.body.name, req.body.email, hash],
                        (error, resultado) => {
                            conn.release();
                            if (error) { return res.status(500).send({ error: error })}
                            response = {
                                mensagem: 'Usuário criado com sucesso!',
                                usuarioCriado: {
                                    id_usuario: resultado.insertId,
                                    nome: req.body.name,
                                    email: req.body.email
                                }
                            }
                            return res.status(201).send(response);
                            
                        })
                });
            }
        })
          
    });
})


router.get('/:id_user', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'SELECT * FROM usuarios WHERE id = ?',
            [req.params.id_user],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({response: resultado})
            }
        )
    })
});

router.put('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `UPDATE usuarios SET nome = ?, email = ?, senha = ?
                WHERE id = ?`,

            [
                req.body.name, 
                req.body.email, 
                req.body.password, 
                req.body.id
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Usuário alterado com sucesso!',
                });
            }
        )
    });
});

router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `DELETE FROM usuarios WHERE id = ?`, 
            
            [req.body.id],

            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Usuário removido com sucesso!',
                });
            }
        )
    });
});

module.exports = router;