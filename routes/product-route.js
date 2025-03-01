const express = require("express")
const productRoute = express.Router()
const productController = require("../controllers/product-contrroller")
const upload = require("../middleware/multer")

productRoute.post("/add", upload.array("images", 10), productController.addProduct)
productRoute.delete("/delete", productController.deleteProduct)
productRoute.patch("/edit", productController.editProduct)
productRoute.get("/list", productController.getProduct)

module.exports = productRoute