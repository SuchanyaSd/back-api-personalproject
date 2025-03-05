const express = require("express")
const cartController = require("../controllers/cart-controller")
const cartRoute = express.Router()

cartRoute.post("/add-cart", cartController.addToCart)

module.exports = cartRoute