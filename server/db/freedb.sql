USE `freedb_chile-vending`;

-- Tabla ROL_USUARIO
CREATE TABLE ROL_USUARIO (
    cod_rol INT PRIMARY KEY,
    nombre_rol VARCHAR(20)
);

-- Tabla PERSONAS
CREATE TABLE PERSONAS (
    cod_persona INT PRIMARY KEY,
    nombre VARCHAR(20),
    apellido VARCHAR(20),
    email VARCHAR(45),
    telefono INT
);

-- Tabla EMPRESAS
CREATE TABLE EMPRESAS (
    cod_empresa INT PRIMARY KEY,
    empresa VARCHAR(30),
    telefono INT,
    email VARCHAR(45),
    vision TEXT
);

-- Tabla CALLE
CREATE TABLE CALLE (
    cod_calle INT PRIMARY KEY,
    calle VARCHAR(20),
    numero INT
);

-- Tabla CIUDADES
CREATE TABLE CIUDADES (
    cod_ciudad INT PRIMARY KEY,
    ciudad VARCHAR(20)
);

-- Tabla DIRECCIONES (asumiendo que es la que relaciona CIUDADES y CALLE)
CREATE TABLE DIRECCIONES (
    cod_direccion INT PRIMARY KEY,
    cod_ciudad INT,
    cod_calle INT,
    FOREIGN KEY (cod_ciudad) REFERENCES CIUDADES(cod_ciudad),
    FOREIGN KEY (cod_calle) REFERENCES CALLE(cod_calle)
);

-- Tabla USUARIOS
CREATE TABLE USUARIOS (
    cod_usuario INT PRIMARY KEY,
    cod_rol INT,
    cod_direccion INT,
    cod_persona INT,
    cod_empresa INT,
    usuario VARCHAR(30),
    clave VARCHAR(255),
    FOREIGN KEY (cod_rol) REFERENCES ROL_USUARIO(cod_rol),
    FOREIGN KEY (cod_persona) REFERENCES PERSONAS(cod_persona),
    FOREIGN KEY (cod_empresa) REFERENCES EMPRESAS(cod_empresa),
    FOREIGN KEY (cod_direccion) REFERENCES DIRECCIONES(cod_direccion)
);

-- Tabla PUBLICACIONES
CREATE TABLE PUBLICACIONES (
    cod_publicaciones INT PRIMARY KEY,
    fecha DATE,
    titulo VARCHAR(150),
    contenido TEXT,
    cod_usuario INT,
    FOREIGN KEY (cod_usuario) REFERENCES USUARIOS(cod_usuario)
);

-- Tabla COMENTARIOS
CREATE TABLE COMENTARIOS (
    cod_comentario INT PRIMARY KEY,
    cuerpo TEXT,
    fecha DATE,
    estado INT,
    cod_publicacion INT,
    FOREIGN KEY (cod_publicacion) REFERENCES PUBLICACIONES(cod_publicaciones)
);

-- Tabla IMAGENES
CREATE TABLE IMAGENES (
    cod_imagen INT PRIMARY KEY,
    imagen TEXT,
    cod_publicacion INT,
    cod_maquina INT,
    FOREIGN KEY (cod_publicacion) REFERENCES PUBLICACIONES(cod_publicaciones)
    -- La referencia a MAQUINAS será agregada cuando se cree la tabla MAQUINAS.
);

-- Tabla CONTACTOS
CREATE TABLE CONTACTOS (
    cod_contacto INT PRIMARY KEY,
    persona INT,
    consulta TEXT,
    FOREIGN KEY (persona) REFERENCES PERSONAS(cod_persona)
);

-- Tabla REDES_SOCIALES
CREATE TABLE REDES_SOCIALES (
    cod_redes_sociales INT PRIMARY KEY,
    link VARCHAR(100),
    cod_empresa INT,
    FOREIGN KEY (cod_empresa) REFERENCES EMPRESAS(cod_empresa)
);

-- Tabla TIPOS_MAQUINA
CREATE TABLE TIPOS_MAQUINA (
    cod_tipo_maquina INT PRIMARY KEY,
    categoria VARCHAR(15)
);

-- Tabla MAQUINAS
CREATE TABLE MAQUINAS (
    cod_maquina INT PRIMARY KEY,
    cod_empresa INT,
    cod_tipo_maquina INT,
    precio INT,
    nombre VARCHAR(15),
    descripcion TEXT,
    FOREIGN KEY (cod_empresa) REFERENCES EMPRESAS(cod_empresa),
    FOREIGN KEY (cod_tipo_maquina) REFERENCES TIPOS_MAQUINA(cod_tipo_maquina)
);

-- Ahora podemos completar la tabla IMAGENES con la clave foránea faltante
ALTER TABLE IMAGENES
ADD FOREIGN KEY (cod_maquina) REFERENCES MAQUINAS(cod_maquina);

-- Tabla PROVEEDORES
CREATE TABLE PROVEEDORES (
    cod_proveedores INT PRIMARY KEY,
    nombre VARCHAR(20),
    cod_empresa INT,
    FOREIGN KEY (cod_empresa) REFERENCES EMPRESAS(cod_empresa)
);
