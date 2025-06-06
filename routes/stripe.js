// import ....
const express = require("express");
const { authCheck } = require("../middleware/auth-middlewarw");
const { payment } = require("../controllers/stripe");
const router = express.Router();
// import controller
// const { payment } = require("../controllers/stripe");

router.post("/user/create-payment-intent", authCheck, payment);

module.exports = router;