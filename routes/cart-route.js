const express = require("express")
const cartController = require("../controllers/cart-controller")
const cartRoute = express.Router()

cartRoute.get("/get", cartController.getUserCart)
cartRoute.post("/add", cartController.addTocart)
cartRoute.post("/update", cartController.updateTocart)

module.exports = cartRoute