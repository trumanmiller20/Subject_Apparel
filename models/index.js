const mongoose = require("mongoose")
const OrderSchema = require("./order")
const ProductSchema = require("./product")

const Order = mongoose.model("Order", OrderSchema)
const Product = mongoose.model("Product", ProductSchema)

module.exports = { Order, Product }
