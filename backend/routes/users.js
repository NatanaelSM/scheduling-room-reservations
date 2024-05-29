import express from "express";
import {getUsers, addUser} from "../controllers/userController.js"

const router = express.Router();

router.get("/usuarios", getUsers);
router.post("/addUsuario", addUser);

export default router;