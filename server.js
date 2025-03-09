const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const handleErrors = require("./middleware/error")
const userRouter = require("./routes/user-route")
const productRoute = require("./routes/product-route")
const notFound = require("./middleware/not-found")
const cartRoute = require("./routes/cart-route")
const orderRoute = require("./routes/order-route")
const paymentRoute = require("./routes/stripe")
const port = process.env.PORT

// const stripe = require('stripe')('sk_test_0QcpU1z0LTkqnbM2xwSgkV9500o3nNRTSO');


const path = require("path");
// const { fileURLToPath } = require("url");

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/order", orderRoute)
app.use("/api/payment", paymentRoute)

// ไม่มีภาพจะไม่แสดงที่หน้าเว็บ
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use(handleErrors)
app.use(notFound)

// const PORT = 8008 
app.listen(port, () => console.log(`Server is running on port ${port}`))