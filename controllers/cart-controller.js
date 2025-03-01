exports.addToCart = async (req, res, next) => {
   try {
      const { customerId, productId, quantity } = req.body;

      const order = await prisma.order.create({
         data: {
            customerId: Number(customerId),
            totalPrice: 0,
            orderItems: {
               create: {
                  productId: Number(productId),
                  quantity: Number(quantity),
               },
            },
         },
         include: {
            orderItems: true,
         },
      });

      res.status(201).json(order);
   } catch (error) {
      console.error("Error adding to cart:", error);
      next(error);
   }
};

exports.updateTocart = async (req, res, next) => {
   try {
      res.json({ message: "updateTocart" })
   } catch (err) {
      next(err)
   }
}
exports.getUserCart = async (req, res, next) => {
   try {
      res.json({ message: "getUserCart" })
   } catch (err) {
      next(err)
   }
}