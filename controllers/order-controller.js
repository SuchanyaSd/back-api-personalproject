const prisma = require("../configs/prisma")

exports.allOrders = async (req, res, next) => {
   try {
      const totalQuantity = await prisma.order_Item.aggregate({
         _sum: {
            quantity: true,
         },
      });

      res.json({ totalQuantity: totalQuantity._sum.quantity || 0 });
   } catch (error) {
      next(error);
   }
};

exports.getTotalQuantityByUserId = async (req, res, next) => {
   try {
      const { userId } = req.params;

      if (!userId) {
         return res.status(400).json({ message: 'User ID is required' });
      }

      const orders = await prisma.order.findMany({
         where: { customerId: parseInt(userId) },
         include: {
            orderItems: true
         }
      });

      const totalQuantity = orders.reduce((total, order) => {
         return total + order.orderItems.reduce((sum, item) => sum + item.quantity, 0);
      }, 0);

      res.status(200).json({ userId, totalQuantity });
   } catch (error) {
      console.error(error);
      next(error);
   }
};

exports.getProductsByCustomerId = async (req, res, next) => {
   try {
      const { customerId } = req.params;

      if (!customerId) {
         return res.status(400).json({ message: 'Customer ID is required' });
      }

      const orders = await prisma.order.findMany({
         where: { customerId: parseInt(customerId) },
         include: {
            orderItems: {
               include: {
                  products: {
                     include: {
                        AllImages: true,
                        sizes: true,
                     },
                  },
               },
            },
         },
      });

      const productData = orders.flatMap((order) =>
         order.orderItems.map((item) => {
            // แปลง sizeId เป็นขนาด
            let sizeName;
            switch (item.sizeId) {
               case 1:
                  sizeName = 'S';
                  break;
               case 2:
                  sizeName = 'M';
                  break;
               case 3:
                  sizeName = 'L';
                  break;
               case 4:
                  sizeName = 'XL';
                  break;
               case 5:
                  sizeName = 'XXL';
                  break;
               default:
                  sizeName = 'Unknown'; // หรือค่าเริ่มต้นอื่น ๆ
            }

            return {
               productId: item.products.id,
               name: item.products.name,
               image: item.products.AllImages.length > 0 ? item.products.AllImages[0].url : null,
               price: item.products.price,
               size: sizeName, // ใช้ sizeName ที่แปลงแล้ว
               quantity: item.quantity,
               totalPrice: item.quantity * item.products.price,
            };
         })
      );

      res.status(200).json(productData);
   } catch (error) {
      console.error(error);
      next(error);
   }
};

exports.deleteProductFromCart = async (req, res, next) => {
   try {
      const { customerId, productId, sizeId } = req.params;

      if (!customerId || !productId || !sizeId) {
         return res
            .status(400)
            .json({ message: 'Customer ID, Product ID, and Size ID are required' });
      }

      // ลบสินค้าออกจากตาราง Order_Item
      await prisma.order_Item.deleteMany({
         where: {
            orders: {
               customerId: parseInt(customerId),
            },
            productId: parseInt(productId),
            sizeId: parseInt(sizeId), // แก้ไขเป็น sizeId และ parse เป็น integer
         },
      });

      res.status(200).json({ message: 'Product deleted successfully' });
   } catch (error) {
      console.error(error);
      next(error);
   }
};

exports.getAllOrders = async (req, res, next) => {
   try {
      const orders = await prisma.order.findMany({
         include: {
            orderItems: true, // ดึงข้อมูล orderItems ที่เกี่ยวข้องด้วย
         },
      });

      res.status(200).json(orders);
   } catch (error) {
      console.error('เกิดข้อผิดพลาดในการดึงข้อมูล orders:', error);
      next(error); // ส่งต่อ error ไปยัง middleware ตัวจัดการ error
   }
};

exports.updateOrderStatus = async (req, res, next) => {
   const { id } = req.params;
   const { paymentStatus } = req.body;

   try {
      const updatedOrder = await prisma.order.update({
         where: { id: parseInt(id) },
         data: { paymentStatus },
      });

      res.json(updatedOrder);
   } catch (error) {
      console.error('Error updating order status:', error);
      next(error); // ส่งต่อ error ไปยัง middleware ตัวจัดการข้อผิดพลาด
   }
};