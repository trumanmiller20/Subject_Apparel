const { Schema } = require("mongoose")

const Order = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
)

module.exports = Order
