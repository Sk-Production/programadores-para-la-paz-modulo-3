
const express = require('express');
const app = express();

app.use(express.json());

// Ruta para registrar un mensaje
app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });

});

// Ruta para registrar una incidencia
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    reportadoPor: "Ronald Rafael Fernández Oviedo",
    ciudad: "Soacha, Cundinamarca",
    tipo: tipo,
    descripcion: descripcion
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});

