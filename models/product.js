const { Schema } = require("mongoose")

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
)

module.exports = Product
