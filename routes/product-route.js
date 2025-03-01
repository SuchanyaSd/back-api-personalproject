const express = require("express")
const productRoute = express.Router()
const productController = require("../controllers/product-contrroller")
const upload = require("../middleware/multer")

productRoute.post("/add", upload.array("images", 10), productController.addProduct)
productRoute.delete("/delete/:productId", productController.deleteProduct)
productRoute.patch("/edit/:productId", productController.editProduct)
productRoute.get("/list/:productId", productController.getProduct)
productRoute.get("/allproducts", productController.getAllProducts)

module.exports = productRoute