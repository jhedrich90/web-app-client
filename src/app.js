const express = require("express"); //Requerimos Express
const app = express(); //Creamos la constante app para requerir express
const port = 3000; // Establecemos el numero de puerto

//Routes del servidor
const routes = require("./routes/index.routes");
app.use(routes);

//Escucha del Servidor en el puuerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
