const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { connectDB } = require("../db/db.js");

const router = express.Router();

router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
  try {
    const conn = await connectDB();
    const [rows] = await conn.query(
      "SELECT * FROM USUARIOS WHERE usuario = ?",
      [username]
    );
    conn.end();

    if (rows.length === 0 || !bcrypt.compareSync(password, rows[0].clave)) {
      // Si no hay coincidencia de usuario o la contraseña no coincide
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Si el usuario es válido, generar y enviar token
    const token = jwt.sign(
      { userId: rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "10000s" } // Duración del token
    );
    res.json({ token });
  } catch (error) {
    console.error("Error en la consulta SQL:", error);
    res.status(500).json({ message: "Error en el servidor" });
  }
});

module.exports = router;
