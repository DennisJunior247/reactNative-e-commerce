const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;
