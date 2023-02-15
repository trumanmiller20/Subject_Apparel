const { Order, Product } = require("../models")

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()
    return res.status(201).json({
      order,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    return res.status(200).json({
      orders,
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({
      products,
    })
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    })
  }
}

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id).populate("products")
    if (order) {
      return res.status(200).json({ order })
    }
    return res.status(404).send("Unable to find order.")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(order)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Order.findOneAndDelete(id)
    if (deleted) {
      return res.status(200).send("Order cancelled")
    }
    throw new Error("Order not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getAllProducts,
  getOrderById,
  updateOrder,
  deleteOrder,
}
