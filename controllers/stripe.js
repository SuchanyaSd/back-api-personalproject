const prisma = require("../configs/prisma");
const stripe = require("stripe")(
   "pk_test_51R0dnA2S3LIqQjBTrxmhwtoURSbS2C0bf7Poj3o3pe19YIUxF4ZmahmIZk8JPk6fqlJk4lSYpr4dYKTFaDPJriDr00PRN1xcjg"
);
// const stripe = require('stripe')('sk_test_0QcpU1z0LTkqnbM2xwSgkV9500o3nNRTSO');
// const stripe = require("stripe")


exports.payment = async (req, res) => {
   try {
      //code
      // Check user
      // req.user.id

      const cart = await prisma.order.findFirst({
         where: {
            customerId : req.customerId.id,
         },
      });
      const amountTHB = cart.cartTotal * 100;

      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
         amount: amountTHB,
         currency: "thb",
         // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
         automatic_payment_methods: {
            enabled: true,
         },
      });

      res.send({
         clientSecret: paymentIntent.client_secret,
      });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error" });
   }
};