CREATE TABLE CLIENTES (
    IdCliente SERIAL,
    Nombre VARCHAR(40) NOT NULL,
    ApPaterno VARCHAR(40)NOT NULL,
    ApMaterno VARCHAR(40) NULL,
    Telefono VARCHAR(15) NOT NULL,
    Correo VARCHAR(60),
    Contrasenia VARCHAR(18),
    PRIMARY KEY (IdCliente)
);


CREATE TABLE EMPLEADOS (
    IdEmpleado SERIAL,
    Nombre VARCHAR(40) NOT NULL,
    ApPaterno VARCHAR(40)NOT NULL,
    ApMaterno VARCHAR(40) NULL,
    NSS VARCHAR(25) NOT NULL,
    Correo VARCHAR(60),
    Contrasenia VARCHAR(18),
    PRIMARY KEY (IdEmpleado)
);


CREATE TABLE PRODUCTOS (
    IdProducto SERIAL,
    Precio INT NOT NULL,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion TEXT,
    Existencias INT NOT NULL,
    PRIMARY KEY (IdProducto)
);


CREATE TABLE SERVICIOS (
    IdServicio SERIAL,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion TEXT,
    Precio INT NOT NULL,
    PRIMARY KEY (IdServicio)
);


CREATE TABLE VENTAS (
    IdVenta SERIAL,
    Fecha timestamp without time zone NOT NULL,
    Total DECIMAL NOT NULL,
    IdCliente INTEGER REFERENCES CLIENTES(IdCliente) ON UPDATE CASCADE ON DELETE RESTRICT,
    IdEmpleado INTEGER REFERENCES EMPLEADOS(IdEmpleado) ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (IdVenta)
);


CREATE TABLE DetalleVentasProducto( 
    IdDetalleVenta SERIAL,
    Cantidad INTEGER NOT NULL,
    Precio DECIMAL NOT NULL,
    IdVenta INTEGER REFERENCES VENTAS(IdVenta) ON UPDATE CASCADE ON DELETE RESTRICT,
    IdProducto INTEGER REFERENCES IdProducto(IdProducto) ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (IdDetalleVenta)
);


CREATE TABLE DetalleVentasServicio( 
    IdDetalleVenta SERIAL,
    Cantidad INTEGER NOT NULL,
    Precio DECIMAL NOT NULL,
    IdVenta INTEGER REFERENCES VENTAS(IdVenta) ON UPDATE CASCADE ON DELETE RESTRICT,
    IdServicio INTEGER REFERENCES IdServicio(IdServicio) ON UPDATE CASCADE ON DELETE RESTRICT,
    PRIMARY KEY (IdDetalleVenta)
);

CREATE TABLE CITAS (
    IdCita SERIAL,
    FechaAgendada TIMESTAMP NOT NULL,
    IdCliente INTEGER NOT NULL,
    IdEmpleado INTEGER NOT NULL,
    IdServicio INTEGER NOT NULL,
    FOREIGN KEY (IdCliente) REFERENCES CLIENTES(IdCliente),
    FOREIGN KEY (IdEmpleado) REFERENCES EMPLEADOS(IdEmpleado),
    FOREIGN KEY (IdServicio) REFERENCES SERVICIOS(IdServicio),
    PRIMARY KEY (IdCita)
);