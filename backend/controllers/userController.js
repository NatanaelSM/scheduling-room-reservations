import bcrypt from "bcrypt";
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

    const {nome, usuario} = req.body;

    const {senha} = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 8)

    db.query(q, [nome, usuario, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Erro no servidor.' + err);
        return res.status(200).send('Usuário registrado com sucesso!' );
    });
};