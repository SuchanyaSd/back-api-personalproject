const express = require("express")
const orderController = require("../controllers/order-controller")
const orderRoute = express.Router()

// admin
orderRoute.get("/list", orderController.allOrders)
orderRoute.get("/total-quantity/:userId", orderController.getTotalQuantityByUserId)
orderRoute.get("/get-product/:customerId", orderController.getProductsByCustomerId)
orderRoute.delete("/customers/:customerId/products/:productId/sizes/:sizeId", orderController.deleteProductFromCart)
orderRoute.patch("/status", orderController.updateStatus)

// payment
// orderRoute.post("/place", orderController.placeOrder)

// user
// orderRoute.get("/user-order", orderController.userOrders)


module.exports = orderRoute