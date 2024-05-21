import { db } from "../db.js";

export const getUsers = (req, res) => {
    const q = "SELECT * FROM usuario";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}



export const addUser = (req, res) => {
    const q = "INSERT INTO usuario(`nome`, `usuario`, `senha`) VALUES (?, ?, ?)";

    const values = [
        req.body.nome,
        req.body.usuario,
        req.body.senha,
    ];

    db.query(q, values, () => {
        if (err) {
            return res.status(500).json(err);
        }

        return res.status(200).json(data);
    });
};