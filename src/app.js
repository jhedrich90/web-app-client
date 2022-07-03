const express = require("express"); //Requerimos Express
const app = express(); //Creamos la constante app para requerir express
const dotenv = require("dotenv");
const connectionDB = require("./db");

dotenv.config();
//Middleware
app.use(express.json());

//Routes del servidor
const routes = require("./routes/index.routes");
app.use(routes);

//Conexion a la base de datos
connectionDB();

//Escucha del Servidor en el puuerto definido
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto", process.env.PORT);
});
