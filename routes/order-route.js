const express = require("express")
const orderController = require("../controllers/order-controller")
const orderRoute = express.Router()

// admin
orderRoute.get("/list", orderController.allOrders)
orderRoute.patch("/status", orderController.updateStatus)

// payment
orderRoute.post("/place", orderController.placeOrder)

// user
orderRoute.post("/user-order", orderController.userOrders)

module.exports = orderRoute