const express = require("express")
const userController = require("../controllers/user-controller")
const { authCheck } = require("../middleware/auth-middlewarw");
const userRouter = express.Router()

userRouter.post("/register", userController.registerUser)
userRouter.post("/login", userController.loginUser)
userRouter.get("/current-user", authCheck, userController.currentUser)
userRouter.get("/customer-id", authCheck, userController.getCustomerId)
userRouter.patch("/edit-user", authCheck, userController.editUser)
userRouter.get('/cart/:customerId', userController.getCartItemsByCustomerId);
userRouter.get('/users/:id', userController.getUserById);
userRouter.put('/users/:id', userController.updateUserById);
userRouter.post('/users/order', authCheck, userController.saveOrder);
module.exports = userRouter