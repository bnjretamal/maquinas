//index.js
const express = require("express");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const login = require("./routes/login.js");
const logout = require("./routes/logout.js");
const maquinas = require("./routes/maquinas.js");

// Configurar dotenv para manejar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();
const port = 3000;

// Configuraciones de Express
app.set("case sensitive routing", false);
app.set("appName", "Express course");

// Middlewares
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "test", // Cambia esto por una cadena secreta más segura en un entorno de producción
    resave: false,
    saveUninitialized: true,
  })
);

app.use(morgan("dev"));

// Configuración de CORS
const corsOptions = {
  //Aceptar solicitudes del cliente
  origin: "http://localhost:4000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../cliente/index.html"));
});

/*app.post("/api/login", login);
app.post("/api/logout", logout);
app.post("/api/registro", usuarios); //Proximanete cambiarlas al archivo ./routes/home.js
app.get("/api/usuarios", usuarios);
app.put("/auth/usuarios", usuarios);
app.delete("/auth/usuarios", usuarios);
//Tabla maquinas
app.get("/auth/maquinas", maquinas);
app.post("/auth/maquinas", maquinas);
app.put("/auth/maquinas", maquinas);
app.delete("/auth/maquinas", maquinas);
//Tabla tipo_maquina
app.get("/api/tipos_maquinas", maquinas);
app.post("/api/tipos_maquinas", maquinas);
app.put("/api/tipos_maquinas", maquinas);
app.delete("/api/tipos_maquinas", maquinas);*/
app.use(require("./routes/home.js"));
app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
