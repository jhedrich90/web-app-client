const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    reuired: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  medida: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  imagen: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
