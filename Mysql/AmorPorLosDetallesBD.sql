create database APLD_BD;
use APLD_BD;
create table Usuarios
(
	nombre varchar(120) not null,
    correo varchar(120) not null,
	usuario varchar(30) not null,
	clave varchar(30) not null,
    constraint PK_Usuario primary key (usuario)
);
select * from usuarios;