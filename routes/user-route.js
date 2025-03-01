const express = require("express")
const userController = require("../controllers/user-controller")
const { authCheck } = require("../middleware/auth-middlewarw");
const userRouter = express.Router()

userRouter.post("/register", userController.registerUser)
userRouter.post("/login", userController.loginUser)
userRouter.get("/current-user", authCheck,userController.currentUser)
userRouter.patch("/edit-user", authCheck,userController.editUser)

module.exports = userRouter