const express = require("express");
const app = express();
const port = 3000;

//Routes del servidor
const routes = require("./routes/index.routes");
app.use(routes);

//Escucha del Servidor en el puuerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
