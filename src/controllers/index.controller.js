const Order = require("../models/Orders");
const controller = {};

controller.orders = async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
};

controller.createOrder = async (req, res) => {
  const { nombre, apellido, telefono, medida, direccion } = req.body;

  const newOrder = new Order({ nombre, apellido, telefono, medida, direccion });
  await newOrder.save();
  res.json(newOrder);
};

controller.updateOrders = async (req, res) => {
  const orderUpdate = await Order.updateOne({ _id: req.params.id }, req.body, {
    new: true,
  });
  console.log(orderUpdate);
  res.send("Recibida");
};

controller.deleteOrders = async (req, res) => {
  const orderRemove = await Order.findByIdAndDelete(req.params.id);
  if (!orderRemove) {
    res.sendStatus(404);
  }
  res.sendStatus(204);
};

controller.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.sendStatus(404);
  }
  res.json(order);
};

module.exports = controller;
