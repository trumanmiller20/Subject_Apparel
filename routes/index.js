const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is root!"))
router.get("/order/:id", controllers.getOrderById)
router.get("/orders", controllers.getAllOrders)
router.get("/products", controllers.getAllProducts)
router.post("/order", controllers.createOrder)
router.put("/order/:id", controllers.updateOrder)
router.delete("/order/:id", controllers.deleteOrder)
module.exports = router
