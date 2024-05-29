import { db } from "../db.js";

export const getReservas = (req, res) => {
    const q = "SELECT * FROM reserva WHERE usuario_id = ?";

    const id = req.params.id;

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

export const addReserva = (req, res) => {
    const q = "INSERT INTO reserva(nome_sala, local_sala, data_uso, hora_inicio_uso, hora_final_uso, responsavel, motivo_uso, info_gerais, convidados, usuario_id) VALUES (?,?,?,?,?,?,?,?,?,?)";

    const values = [
        req.body.nome_sala,
        req.body.local_sala,
        req.body.data_uso,
        req.body.hora_inicio_uso,
        req.body.hora_final_uso,
        req.body.responsavel,
        req.body.motivo_uso,
        req.body.info_gerais,
        req.body.convidados,
        req.body.usuario_id
    ];

    db.query(q, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).json("Reserva criada com sucesso.");
    });
}