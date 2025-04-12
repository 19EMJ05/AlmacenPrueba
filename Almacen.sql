CREATE DATABASE almacenPruebaTec;
use almacenPruebaTec;
CREATE Table usuarios(
    idusuario int(6) PRIMARY KEY,
    nombre VARCHAR(50) not NULL,
    contrasena VARCHAR(16) not NULL,
    correo VARCHAR(50),
    idrol int(2) not NULL,
    estatus int(1) not NULL
);
CREATE Table productos( 
    idproducto int AUTO_INCREMENT PRIMARY Key,
    nombreproducto VARCHAR(30) not null,
    cantidadproducto int not null,
    estatusproducto int(1) not null 
);
create table historico(
    idhistorico INT AUTO_INCREMENT PRIMARY key,
    nombreproducto VARCHAR(30) not null,
    idusuario int(6) not NULL,
    tipomov ENUM("Entrada","Salida") not null,
    cantidadActual int,
    cantidadNueva int,
    fechamod DATE,
    horamod TIME
);

INSERT INTO usuarios (idusuario, nombre, contrasena, correo, idrol, estatus)
VALUES 
(100001, 'Ana López', 'ana12345', 'ana.lopez@mail.com', 1, 1),
(100002, 'Carlos Ruiz', 'carlos12345', 'carlos.ruiz@mail.com', 2, 1),
(100003, 'María Torres', 'maria12345', 'maria.torres@mail.com', 1, 0);

INSERT INTO productos (nombreproducto, cantidadproducto, estatusproducto)
VALUES
('Laptop HP', 10, 1),
('Mouse Logitech', 25, 1),
('Teclado Mecánico', 15, 1),
('Monitor Samsung 24"', 8, 1),
('Cable HDMI', 40, 1),
('Cargador Laptop Universal', 20, 1),
('Memoria USB 32GB', 50, 1),
('Disco Duro Externo 1TB', 12, 1),
('Router TP-Link', 14, 1),
('Switch de Red 8 Puertos', 6, 1),
('Audífonos Gamer', 30, 1),
('Webcam HD', 18, 1),
('Impresora Multifuncional', 5, 1),
('Tóner para Impresora', 10, 1),
('Silla Ergonómica de Oficina', 7, 1),
('Base para Laptop', 22, 1),
('Adaptador USB-C', 35, 1),
('Ventilador para Laptop', 16, 1),
('Bocinas Bluetooth', 20, 1),
('Micrófono USB', 12, 1);
