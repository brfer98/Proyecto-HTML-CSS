CREATE DATABASE IF NOT EXISTS dreamusic;
USE dreamusic;


CREATE TABLE tipo_usuario (
	ID INT AUTO_INCREMENT NOT NULL,
	tipo_usuario VARCHAR(255) NOT NULL,
	PRIMARY KEY (ID)
);

CREATE TABLE usuarios (
	ID INT AUTO_INCREMENT NOT NULL,
	tipo_usuario INT NOT NULL, /*FK*/
	nombre_usuario VARCHAR (255) NOT NULL,
	contraseña VARCHAR(255) NOT NULL,
	email VARCHAR(255),
	telefono INT,
	PRIMARY KEY (ID),
	FOREIGN KEY fk_tipo_usuario(tipo_usuario) REFERENCES tipo_usuario(ID)
					ON UPDATE CASCADE ON DELETE RESTRICT
);


CREATE TABLE categoria (
	ID INT AUTO_INCREMENT NOT NULL,
	nombre_categoria VARCHAR(255) NOT NULL,
	PRIMARY KEY (ID)
);
