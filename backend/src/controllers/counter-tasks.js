const mysql = require('../mysql').pool;

exports.counterTasks = (req, res, next) => {

        mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error })}
        conn.query(
            `SELECT count(*)
            FROM lembretes AS L
            JOIN usuarios AS U ON u.id = L.usuario_id
            WHERE L.concluido = FALSE AND U.id = ?`,
            [req.usuario.id],
            (error, resultado, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error })}
                return res.status(200).send({Total: resultado})
            }
        )
    })
};

