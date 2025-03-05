const express = require("express")
const orderController = require("../controllers/order-controller")
const orderRoute = express.Router()

orderRoute.get("/list", orderController.allOrders)
orderRoute.get("/total-quantity/:userId", orderController.getTotalQuantityByUserId)
orderRoute.get("/get-product/:customerId", orderController.getProductsByCustomerId)
orderRoute.delete("/customers/:customerId/products/:productId/sizes/:sizeId", orderController.deleteProductFromCart)

module.exports = orderRoute