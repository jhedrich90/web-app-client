//Requerimos el paquete Router de Express
const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");

//Ruta GET del home de la aplicacion
router.get("/orders", controller.orders);
router.post("/orders", controller.createOrder);
router.put("/orders/:id", controller.updateOrders);
router.delete("/orders/:id", controller.deleteOrders);
router.get("/orders/:id", controller.getOrder);

module.exports = router;
