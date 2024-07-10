const express = require("express");
const bcrypt = require("bcryptjs");
const { connectDB } = require("../db/db.js");

const router = express.Router();

router.use(async (req, res, next) => {
  try {
    req.conn = await connectDB();
    next();
  } catch (error) {
    return res
      .status(500)
      .send("Error al conectar con la base de datos: " + error.message);
  }
});

router.get("/api/usuarios", async (req, res) => {
  try {
    const sql = "SELECT * FROM USUARIOS"; // Ajusta esta consulta según tus necesidades
    const [users] = await req.conn.query(sql);
    res.json(users);
  } catch (error) {
    res.status(500).send("Error al obtener los usuarios: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.post("/api/registro", async (req, res) => {
  //Se puede cambiar por auth, ya que deberia tener verificacion de token
  const { username, password, rol, nombre, apellido, email, telefono, cargo } =
    req.body;

  try {
    // Comprobamos si ya existe el usuario
    const consultaExistencia = "SELECT * FROM USUARIOS WHERE usuario = ?";
    const [existingUser] = await req.conn.query(consultaExistencia, [username]);

    if (existingUser.length > 0) {
      //si devuelve algo es pq el usuario estás
      await req.conn.end();
      return res.status(400).json({ error: "El nombre de usuario ya existe" });
    }

    // Encriptar la contraseña
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insertar datos en la tabla PERSONAS
    const consultaInsercionPersona =
      "INSERT INTO PERSONAS (nombre, apellido, email, telefono) VALUES (?, ?, ?, ?)";
    const [resultPersona] = await req.conn.query(consultaInsercionPersona, [
      nombre,
      apellido,
      email,
      telefono,
    ]);

    // Obtener el ID de la persona recién insertada
    const codPersona = resultPersona.insertId;

    // Insertar datos en la tabla USUARIOS
    const consultaInsercionUsuario =
      "INSERT INTO USUARIOS (cod_rol, cod_persona, usuario, clave, cargo) VALUES (?, ?, ?, ?,?)";
    await req.conn.query(consultaInsercionUsuario, [
      rol,
      codPersona,
      username,
      hashedPassword,
      cargo,
    ]);

    await req.conn.end();
    return res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
});

router.put("/auth/usuarios", async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    const sql = "UPDATE USUARIOS SET clave = ? WHERE usuario = ?";
    await req.conn.query(sql, [hashedPassword, username]);
    res.send("Contraseña actualizada con éxito");
  } catch (error) {
    res.status(500).send("Error al actualizar la contraseña: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.delete("/auth/usuarios", async (req, res) => {
  const { username } = req.body;

  try {
    const sql = "DELETE FROM USUARIOS WHERE usuario = ?";
    await req.conn.query(sql, [username]);
    res.send("Usuario eliminado con éxito");
  } catch (error) {
    res.status(500).send("Error al eliminar el usuario: " + error.message);
  } finally {
    req.conn.end();
  }
});

module.exports = router;
