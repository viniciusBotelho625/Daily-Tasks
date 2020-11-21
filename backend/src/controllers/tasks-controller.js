const mysql = require('../mysql').pool;


exports.getTasks = (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT L.id, L.dt_cadastro, L.dt_termino, L.titulo, L.descricao, L.concluido, U.nome 
            FROM lembretes AS L
            JOIN usuarios AS U ON U.id = L.usuario_id
            WHERE L.concluido = false AND U.id = ?`,
            [req.usuario.id],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send(resultado)
            }
        )
    })
};

exports.getTasksId = (req, res, next) => {
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'SELECT * from lembretes WHERE id = ?',
            [req.params.id],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send(resultado[0])
            }
        )
    })
};

exports.postTasks = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `INSERT INTO lembretes (dt_cadastro, dt_termino, titulo, descricao, concluido, usuario_id) 
            VALUES (?, ?, ?, ?, FALSE, ?)`,
            [
                req.body.dt_cadastro,
                req.body.dt_termino,
                req.body.titulo,
                req.body.descricao,
                req.usuario.id
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
};

exports.getConcluidTasks = (req, res, next) => {
    
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT L.id, L.dt_cadastro, L.dt_termino, L.titulo, L.descricao, L.concluido, U.nome 
            FROM lembretes AS L
            JOIN usuarios AS U ON U.id = L.usuario_id
            WHERE L.concluido = true AND U.id = ?`,
            [req.usuario.id],
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send( resultado)
            }
        )
    })
};

exports.deleteTasks = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            'DELETE FROM lembretes WHERE id = ?',
            [req.params.id],
            (error, resultado, field) => {
                if (error) { return res.status(202).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Lembrete removido com sucesso!',
                });
            }
        )
    })
};

exports.putTasks = (req, res, next) => {
    console.log(req.body)
    console.log(req.params.id)
    const { titulo, descricao} = req.body
    const dt_cadastro = new Date(req.body.dt_cadastro).toISOString().split('T')[0]
    const dt_termino = new Date(req.body.dt_termino).toISOString().split('T')[0]
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `UPDATE lembretes SET 
                dt_cadastro = '${dt_cadastro}', 
                dt_termino = '${dt_termino}', 
                titulo = '${titulo}', 
                descricao = '${descricao}' 
            WHERE id = ${req.params.id}`,
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error })}

                res.status(202).send({
                    mensagem: 'Lembrete alterado com sucesso!',
                })
            }
        )
    })
};

// exports.putTasks = (req, res, next) => {
//     mysql.getConnection((error, conn) =>{
//         if (error) { return res.status(500).send({ error: error })}
//         conn.query(
//             'UPDATE lembretes SET concluido = true WHERE id = ?',
//             [req.params.id],
//             (error, resultado, field) => {
//                 if (error) { return res.status(202).send({ error: error })}

//                 res.status(202).send({
//                     mensagem: 'Lembrete concluido com sucesso!',
//                 })
//             }
//         )
//     })
// };