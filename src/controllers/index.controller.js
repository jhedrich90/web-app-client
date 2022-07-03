const controller = {};

controller.orders = (req, res) => {
  res.send([]);
};

controller.createOrder = (req, res) => {
  res.send("Orden Creada Exitosamente");
};

controller.updateOrders = (req, res) => {
  res.send("Orden actualizada exitosamente!");
};

controller.deleteOrders = (req, res) => {
  res.send("Orden Borrada Existosamente!");
};

controller.getOrder = (req, res) => {
  res.send("Orden Unica Numero X");
};

module.exports = controller;
