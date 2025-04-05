const prisma = require("../configs/prisma");
const stripe = require("stripe")(
   "sk_test_51R0e3MCaAnIpzJiqknSshoFsjf2BHMab9QeORxSPL50IAFVi6dTuQ9s6BsocvkubAMDwXK3Uw3hvMnkF8BAEgz3T00SEyY1OIu"
);

exports.payment = async (req, res) => {
   try {
      //code
      // Check user
      // req.user.id

      const cart = await prisma.order.findFirst({
         where: {
            customerId: req.user.id,
         },
      });
      const amountTHB = cart.totalPrice * 100;
      console.log(amountTHB)

      // // Create a PaymentIntent with the order amount and currency
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

      // res.json("pyament")
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error" });
   }
};