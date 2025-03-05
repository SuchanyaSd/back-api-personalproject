const express = require("express")
const userController = require("../controllers/user-controller")
const { authCheck } = require("../middleware/auth-middlewarw");
const userRouter = express.Router()

userRouter.post("/register", userController.registerUser)
userRouter.post("/login", userController.loginUser)
// userRouter.get("/current-user", authCheck, userController.currentUser)
userRouter.get("/customer-id", authCheck, userController.getCustomerId)
userRouter.patch("/edit-user", authCheck, userController.editUser)
userRouter.get('/cart/:customerId', userController.getCartItemsByCustomerId);

module.exports = userRouter