const express = require("express");
const db = require("../db/db");

const router = express.Router();

const login = require("./login");
const logout = require("./logout");
const maquinas = require("./maquinas");
const usuarios = require("./usuarios");

// Inicio de sesion / cerrar sesion
router.post("/api/login", login);
router.post("/api/logout", logout);
// Gestion de usuariop
router.post("/api/registro", usuarios); // Se entiende como el registro de usuarios (POST)
router.get("/api/usuarios", usuarios);
router.put("/auth/usuarios", usuarios);
router.delete("/auth/usuarios", usuarios);
// Gestion de maquinas
router.get("/auth/maquinas", maquinas);
router.post("/auth/maquinas", maquinas);
router.put("/auth/maquinas", maquinas);
router.delete("/auth/maquinas", maquinas);
// Configuracion de la tabla tipos de maquinas -- En duda si el admin debo poder modificar eso
router.get("/api/tipos_maquinas", maquinas);
router.post("/api/tipos_maquinas", maquinas);
router.put("/api/tipos_maquinas", maquinas);
router.delete("/api/tipos_maquinas", maquinas);

module.exports = router;
