import { db } from "../db.js";

export const addLogin = (req, res) => {
    const { usuario, senha } = req.body;
    const q = `SELECT * FROM usuario WHERE usuario = ?`;
    
    db.query(q, [usuario], (err, result) => {
        if (err) return res.status(500).send("Erro no servidor!");
        if (result.length === 0) return res.status(404).send('Usuário não encontrado.');
        
        const resultUsuario = result[0];
        
        if (resultUsuario.senha !== senha) {
            return res.status(401).send('Senha inválida.');
        }
        
        res.status(200).send('Login realizado com sucesso!');
    });
}
