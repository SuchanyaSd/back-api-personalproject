const express = require("express")
const productRoute = express.Router()
const productController = require("../controllers/product-contrroller")
const upload = require("../middleware/multer")

// productRoute.post("/add", upload.fields([{name : "image1", maxCount : 1}, {name : "image2", maxCount : 1}, {name : "image3", maxCount : 1}, {name : "image4", maxCount : 1} ]), productController.addProduct)
productRoute.post("/add", upload.array("images", 10), productController.addProduct)
productRoute.delete("/remove", productController.removeProduct)
productRoute.post("/single", productController.singleProduct)
productRoute.get("/list", productController.listProduct)

module.exports = productRoute