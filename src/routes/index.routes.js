//Requerimos el paquete Router de Express
const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");

//Ruta GET del home de la aplicacion
router.get("/", controller.index);

module.exports = router;
