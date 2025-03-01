const prisma = require("../configs/prisma")
const createError = require("../utils/createError")

// exports.addToCart = async (req, res, next) => {
//    try {
//       const { customerId, productId, quantity } = req.body;

//       const order = await prisma.order.create({
//          data: {
//             customerId: Number(customerId),
//             totalPrice: 0,
//             orderItems: {
//                create: {
//                   productId: Number(productId),
//                   quantity: Number(quantity),
//                },
//             },
//          },
//          include: {
//             orderItems: true,
//          },
//       });

//       res.status(201).json(order);
//    } catch (error) {
//       console.error("Error adding to cart:", error);
//       next(error);
//    }
// };


exports.addToCart = async (req, res, next) => {
   try {
      const { customerId, productId, quantity } = req.body;

      let order = await prisma.order.findFirst({
         where: {
            customerId: Number(customerId),
            completed: false, // ใช้ field 'completed' ที่ถูกต้อง
         },
         include: {
            orderItems: true,
         },
      });

      if (order) {
         await prisma.order.update({
            where: { id: order.id },
            data: {
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
      } else {
         order = await prisma.order.create({
            data: {
               customerId: Number(customerId),
               totalPrice: 0,
               completed: false, // เพิ่ม field 'completed' ตอนสร้าง order
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
      }

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