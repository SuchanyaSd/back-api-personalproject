const prisma = require("../configs/prisma");
const createError = require("../utils/createError");

exports.addToCart = async (req, res, next) => {
   try {
      const { customerId, productId, quantity, size, address } = req.body;

      // แปลงขนาดเป็นตัวเลข
      let sizeId;
      switch (size.toUpperCase()) {
         case 'S': sizeId = 1; break;
         case 'M': sizeId = 2; break;
         case 'L': sizeId = 3; break;
         case 'XL': sizeId = 4; break;
         case 'XXL': sizeId = 5; break;
         default:
            return createError(400, "Invalid size");
      }

      const product = await prisma.product.findUnique({
         where: { id: Number(productId) },
      });

      if (!product) {
         return createError(404, "Product not found");
      }

      const itemTotalPrice = product.price * Number(quantity);

      const existingOrder = await prisma.order.findFirst({
         where: {
            customerId: Number(customerId),
            completed: false,
         },
         orderBy: { createdAt: 'desc' }, // ดึง order ล่าสุด
         include: { orderItems: true },
      });

      const newAddress = await prisma.user.update({
         data: {
            address: address,
         },
         where: {
            id: Number(customerId),
         },
      })
      console.log(newAddress)
      console.log(existingOrder)

      const now = new Date();
      const orderTimeLimit = 1000;

      let order;
      if (existingOrder && (now - new Date(existingOrder.createdAt) < orderTimeLimit)) {
         // ใช้ order เดิมหากอยู่ในระยะเวลาที่กำหนด
         order = await prisma.order.update({
            where: { id: existingOrder.id },
            data: {
               totalPrice: existingOrder.totalPrice + itemTotalPrice,
               orderItems: {
                  create: {
                     productId: Number(productId),
                     sizeId: sizeId,
                     quantity: Number(quantity),
                  },
               },
            },
            include: { orderItems: true },
         });
      } else {
         // สร้าง order ใหม่หากเกินระยะเวลาที่กำหนด
         order = await prisma.order.create({
            data: {
               customerId: Number(customerId),
               totalPrice: itemTotalPrice,
               completed: false,
               createdAt: now, // บันทึกเวลา
               orderItems: {
                  create: {
                     productId: Number(productId),
                     sizeId: sizeId,
                     quantity: Number(quantity),
                  },
               },
            },
            include: { orderItems: true },
         });
      }
      console.log(order)

      res.status(201).json({order : order, newAddress : newAddress});
   } catch (error) {
      console.error("Error adding to cart:", error);
      next(error);
   }
};
