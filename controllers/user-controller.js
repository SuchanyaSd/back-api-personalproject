const prisma = require("../configs/prisma")
const createError = require("../utils/createError")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req, res, next) => {
   try {
      const { email, firstname, lastname, password, address } = req.body;

      const checkEmail = await prisma.user.findFirst({
         where: {
            email: email,
         },
      });
      if (checkEmail) {
         return createError(400, "Email is already exits!!!");
      }

      const hashedPassword = bcrypt.hashSync(password, 10);
      console.log(hashedPassword);
      const profile = await prisma.user.create({
         data: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            address: address,
            password: hashedPassword,
         },
      });

      console.log(profile)

      res.json({ message: "Register Success" })
   } catch (err) {
      next(err)
   }
}

exports.loginUser = async (req, res, next) => {
   try {

      const { email, password } = req.body;

      const profile = await prisma.user.findFirst({
         where: {
            email: email,
         },
      });
      if (!profile) {
         return createError(400, "Email, Password is invalid!!");
      }
      const isMatch = bcrypt.compareSync(password, profile.password);

      if (!isMatch) {
         return createError(400, "Email, Password is invalid!!");
      }

      const payload = {
         id: profile.id,
         email: profile.email,
         firstname: profile.firstname,
         lastname: profile.lastname,
         role: profile.role,
      };
      const token = jwt.sign(payload, process.env.SECRET, {
         expiresIn: "20d",
      });

      res.json({
         message: "Login Success",
         payload: payload,
         token: token,
      });

   } catch (err) {
      next(err)
   }
}

exports.currentUser = async (req, res, next) => {
   try {
      res.json({ result: req.user });
   } catch (error) {
      next(error);
   }
};

exports.editUser = async (req, res, next) => {
   try {
      const { firstname, lastname, address } = req.body;

      const profile = await prisma.user.update({
         where: {
            id: req.user.id,
         },
         data: {
            firstname: firstname,
            lastname: lastname,
            address: address,
         },
      });

      res.json({ message: "Edit Success" });
   } catch (err) {
      next(err)
   }
}

// exports.editUser = async (req, res, next) => {
//    try {
//       const { firstname, lastname } = req.body;

//       const profile = await prisma.user.update({
//          where: {
//             id: req.user.id,
//          },
//          data: {
//             firstname: firstname,
//             lastname: lastname,
//          },
//       });

//       res.json({ message: "Edit Success" });
//    } catch (err) {
//       next(err)
//    }
// }

// exports.getCustomerId = async (req, res, next) => {
//    try {
//       // ดึง token จาก request header
//       const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

//       if (!token) {
//          return res.status(401).json({ message: "Unauthorized: No token provided" });
//       }

//       // ตรวจสอบและถอดรหัส token
//       const decoded = jwt.verify(token, process.env.SECRET);
//       const userId = decoded.id;

//       // ค้นหา user ใน database
//       const user = await prisma.user.findUnique({
//          where: { id: userId },
//          select: { id: true }, // เลือกเฉพาะ customerId (id)
//       });

//       if (!user) {
//          return res.status(404).json({ message: "User not found" });
//       }

//       res.json({ customerId: user.id });

//    } catch (error) {
//       next(error);
//    }
// };


exports.getCustomerId = async (req, res, next) => {
   try {
      const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

      if (!token) {
         return res.status(401).json({ message: "Unauthorized: No token provided" });
      }

      const decoded = jwt.verify(token, process.env.SECRET);
      const userId = decoded.id;

      const user = await prisma.user.findUnique({
         where: { id: userId },
         select: { id: true, firstname: true, lastname: true, address: true }, // เพิ่มข้อมูลที่ต้องการ
      });

      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }

      res.json({ 
         customerId: user.id,
         firstname: user.firstname,
         lastname: user.lastname,
         address: user.address
      });

   } catch (error) {
      next(error);
   }
};

exports.getUserById = async (req, res, next) => {
   try {
     const userId = parseInt(req.params.id); // ดึง id จาก request parameters และแปลงเป็น integer
     const user = await prisma.user.findUnique({
       where: {
         id: userId,
       },
       select: {
         firstname: true,
         lastname: true,
         email: true,
         address: true,
       },
     });
 
     if (!user) {
       return res.status(404).json({ message: 'ไม่พบผู้ใช้' });
     }
 
     res.status(200).json(user);
   } catch (error) {
     console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', error);
     next(error); // ส่งต่อ error ไปยัง middleware ตัวจัดการ error
   }
 };

 exports.updateUserById = async (req, res, next) => {
   try {
      const userId = parseInt(req.params.id); // รับค่า id จากพารามิเตอร์
      const { firstname, lastname, email, address } = req.body; // รับค่าที่ต้องการอัปเดตจาก body

      const updatedUser = await prisma.user.update({
         where: { id: userId },
         data: { firstname, lastname, email, address },
      });

      res.status(200).json({ message: 'อัปเดตข้อมูลสำเร็จ', user: updatedUser });
   } catch (error) {
      console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้:', error);
      next(error); // ส่ง error ไปให้ middleware จัดการ
   }
};


exports.getCartItemsByCustomerId = async (req, res, next) => {
   try {
     const { customerId } = req.params;
 
     if (!customerId) {
       return res.status(400).json({ message: 'customerId is required' });
     }
 
     const orders = await prisma.order.findMany({
       where: { customerId: Number(customerId), completed: false },
       select: {
         id: true,
         orderDate: true,        // เพิ่มวันที่สั่งซื้อ
         paymentStatus: true,    // เพิ่มสถานะการชำระเงิน
         orderItems: {
           include: {
             products: {
               select: { 
                 id: true, 
                 name: true, 
                 price: true, 
                 AllImages: { select: { url: true }, take: 1 }
               }
             },
             size: true,
           },
         },
       },
     });
 
     if (!orders || orders.length === 0) {
       return res.status(404).json({ message: 'No cart items found for this customer' });
     }
 
     res.status(200).json(orders);
   } catch (error) {
     console.error('Error fetching cart items:', error);
     next(error);
   }
 };
//    try {
//      const { customerId } = req.params; // รับ customerId จาก params
 
//      if (!customerId) {
//        return res.status(400).json({ message: 'customerId is required' });
//      }
 
//      const orders = await prisma.order.findMany({
//        where: {
//          customerId: Number(customerId),
//          completed: false,
//        },
//        include: {
//          orderItems: {
//            include: {
//              products: true,
//              size: true,
//            },
//          },
//        },
//      });
 
//      if (!orders || orders.length === 0) {
//        return res.status(404).json({ message: 'No cart items found for this customer' });
//      }
 
//      res.status(200).json(orders);
//    } catch (error) {
//      console.error('Error fetching cart items:', error);
//      next(error);
//    }
//  };