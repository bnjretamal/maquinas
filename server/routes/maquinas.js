const express = require("express");
const verificarToken = require("../middlewares/verificacionToken.js");
const { connectDB } = require("../db/db.js");

const router = express.Router();

// Middleware para conectar a la base de datos antes de cada consulta
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
//Respecto a la informacion de las maquinas que se muestra de maquinas
router.get("/auth/maquinas", verificarToken, async (req, res) => {
  try {
    const sql = "SELECT * FROM MAQUINAS";
    const [results] = await req.conn.query(sql);
    res.json(results);
  } catch (error) {
    res.status(500).send("Error al obtener las máquinas: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.post("/auth/maquinas", async (req, res) => {
  const { cod_empresa, cod_tipo_maquina, nombre, descripcion, precio } =
    req.body;
  const sql =
    "INSERT INTO MAQUINAS (cod_empresa, cod_tipo_maquina, nombre, descripcion, precio) VALUES (?, ?, ?, ?, ?)";
  try {
    await req.conn.query(sql, [
      cod_empresa,
      cod_tipo_maquina,
      nombre,
      descripcion,
      precio,
    ]);
    res.status(201).send("Máquina creada con éxito");
  } catch (error) {
    res.status(500).send("Error al insertar la máquina: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.put("/auth/maquinas", async (req, res) => {
  const {
    cod_maquina,
    cod_empresa,
    cod_tipo_maquina,
    nombre,
    descripcion,
    precio,
  } = req.body;
  const sql =
    "UPDATE MAQUINAS SET cod_empresa = ?, cod_tipo_maquina = ?, nombre = ?, descripcion = ?, precio = ? WHERE cod_maquina = ?";

  try {
    await req.conn.query(sql, [
      cod_empresa,
      cod_tipo_maquina,
      nombre,
      descripcion,
      precio,
      cod_maquina,
    ]);
    res.send("Máquina actualizada con éxito");
  } catch (error) {
    res.status(500).send("Error al actualizar la máquina: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.delete("/auth/maquinas", async (req, res) => {
  const { cod_maquina } = req.body;
  const sql = "DELETE FROM MAQUINAS WHERE cod_maquina = ?";

  try {
    await req.conn.query(sql, [cod_maquina]);
    res.send("Máquina eliminada con éxito");
  } catch (error) {
    res.status(500).send("Error al eliminar la máquina: " + error.message);
  } finally {
    req.conn.end();
  }
});
//repecto al tipo de maquina
router.get("/api/tipos_maquinas", async (req, res) => {
  try {
    const sql = "SELECT * FROM TIPOS_MAQUINA";
    const [results] = await req.conn.query(sql);
    res.json(results);
  } catch (error) {
    res
      .status(500)
      .send("Error al consultar a la base de datos: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.post("/api/tipos_maquinas", async (req, res) => {
  const { cod_tipo_maquina, categoria } = req.body;
  try {
    const sql =
      "INSERT INTO TIPOS_MAQUINA (cod_tipo_maquina, categoria) VALUES (?, ?)";
    const [results] = await req.conn.query(sql, [cod_tipo_maquina, categoria]);
    res.status(201).send("Insertado con exito");
  } catch (error) {
    res.status(500).send("Error al insertar tipo de maquina: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.put("/api/tipos_maquinas", async (req, res) => {
  const { cod_tipo_maquina, categoria } = req.body;
  try {
    const sql =
      "UPDATE TIPOS_MAQUINA SET categoria = ? WHERE cod_tipo_maquina = ?";
    const [results] = await req.conn.query(sql, [cod_tipo_maquina, categoria]);
    res.status(201).send("Modificado con exito");
  } catch (error) {
    res
      .status(500)
      .send("Error al consultar a la base de datos: " + error.message);
  } finally {
    req.conn.end();
  }
});

router.delete("/api/tipos_maquinas", async (req, res) => {
  const { cod_tipo_maquina } = req.body;
  try {
    const sql = "DELETE FROM TIPOS_MAQUINA WHERE cod_tipo_maquina = ?";
    const [results] = await req.conn.query(sql, cod_tipo_maquina);
    res.status(201).send("Eliminado con exito");
  } catch (error) {
    res
      .status(500)
      .send("Error al consultar a la base de datos: " + error.message);
  } finally {
    req.conn.end();
  }
});
module.exports = router;
