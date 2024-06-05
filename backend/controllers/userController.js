import bcrypt from "bcrypt";
import { db } from "../db.js";

export const getUsers = (req, res) => {
    const q = "SELECT * FROM usuario";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}

export const getUserById = (req, res) => {
    const q = "SELECT * FROM usuario WHERE id = ?";

    const id = req.params.id;

    db.query(q, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data)
    })
}


export const addUser = (req, res) => {
    const {nome ,usuario, senha } = req.body;

    // Hashing a senha antes de armazená-la no banco de dados
    bcrypt.hash(senha, 10, (err, hash) => {
        if (err) {
            console.error("Erro no bcrypt:", err);
            return res.status(500).send("Erro no servidor!");
        }

        const q = "INSERT INTO usuario(`nome`, `senha`, `usuario`) VALUES (?, ?, ?)";
        db.query(q, [nome ,hash, usuario], (err, result) => {
            if (err) {
                console.error("Erro no banco de dados:", err);
                return res.status(500).send("Erro no servidor!");
            }
            res.status(201).send('Usuário criado com sucesso!');
        });
    });

};