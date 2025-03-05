const prisma = require("../configs/prisma")

// exports.addToCart = async (req, res, next) => {
//    try {
//       const { customerId, productId, quantity, size } = req.body;

//       // แปลงขนาดเป็นตัวเลข
//       let sizeId;
//       switch (size.toUpperCase()) {
//          case 'S':
//             sizeId = 1;
//             break;
//          case 'M':
//             sizeId = 2;
//             break;
//          case 'L':
//             sizeId = 3;
//             break;
//          case 'XL':
//             sizeId = 4;
//             break;
//          case 'XXL':
//             sizeId = 5;
//             break;
//          default:
//             return res.status(400).json({ message: "Invalid size" });
//       }

//       // ดึงข้อมูล product จาก productId
//       const product = await prisma.product.findUnique({
//          where: {
//             id: Number(productId),
//          },
//       });

//       if (!product) {
//          return res.status(404).json({ message: "Product not found" });
//       }

//       const itemTotalPrice = product.price * Number(quantity); // คำนวณราคารวมของ orderItem

//       let order = await prisma.order.findFirst({
//          where: {
//             customerId: Number(customerId),
//             completed: false,
//          },
//          include: {
//             orderItems: true,
//          },
//       });

//       if (order) {
//          // อัปเดต order
//          await prisma.order.update({
//             where: { id: order.id },
//             data: {
//                totalPrice: order.totalPrice + itemTotalPrice, // อัปเดต totalPrice
//                orderItems: {
//                   create: {
//                      productId: Number(productId),
//                      sizeId: sizeId,
//                      quantity: Number(quantity),
//                   },
//                },
//             },
//             include: {
//                orderItems: true,
//             },
//          });

//          // ดึง order ที่อัปเดตแล้ว
//          order = await prisma.order.findUnique({
//             where: { id: order.id },
//             include: { orderItems: true }
//          })

//       } else {
//          // สร้าง order ใหม่
//          order = await prisma.order.create({
//             data: {
//                customerId: Number(customerId),
//                totalPrice: itemTotalPrice, // ตั้งค่า totalPrice เริ่มต้น
//                completed: false,
//                orderItems: {
//                   create: {
//                      productId: Number(productId),
//                      sizeId: sizeId,
//                      quantity: Number(quantity),
//                   },
//                },
//             },
//             include: {
//                orderItems: true,
//             },
//          });
//       }

//       res.status(201).json(order);
//    } catch (error) {
//       console.error("Error adding to cart:", error);
//       next(error);
//    }
// };



exports.addToCart = async (req, res, next) => {
   try {
      const { customerId, productId, quantity, size } = req.body;

      // แปลงขนาดเป็นตัวเลข
      let sizeId;
      switch (size.toUpperCase()) {
         case 'S': sizeId = 1; break;
         case 'M': sizeId = 2; break;
         case 'L': sizeId = 3; break;
         case 'XL': sizeId = 4; break;
         case 'XXL': sizeId = 5; break;
         default:
            return res.status(400).json({ message: "Invalid size" });
      }

      const product = await prisma.product.findUnique({
         where: { id: Number(productId) },
      });

      if (!product) {
         return res.status(404).json({ message: "Product not found" });
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

      const now = new Date();
      const orderTimeLimit = 5 * 60 * 1000; // 5 นาที

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

      res.status(201).json(order);
   } catch (error) {
      console.error("Error adding to cart:", error);
      next(error);
   }
};
