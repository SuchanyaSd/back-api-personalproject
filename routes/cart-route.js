const express = require("express")
const cartController = require("../controllers/cart-controller")
const cartRoute = express.Router()

cartRoute.get("/get", cartController.getUserCart)
cartRoute.post("/cart-items", cartController.addToCart)
cartRoute.put("/update", cartController.updateTocart)

module.exports = cartRoute