const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Bienvenid@!!!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
