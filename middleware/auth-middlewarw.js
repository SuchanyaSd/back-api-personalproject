const createError = require("../utils/createError");
const jwt = require("jsonwebtoken");
exports.authCheck = async (req, res, next) => {
   try {
      // code
      // รับ header จาก client
      const authorization = req.headers.authorization;
      console.log(authorization)
      // Check ถ้าไม่มี Token
      if (!authorization) {
         return createError(400, "Missing Token!!!111111");
      }
      // Bearer token.......  ใช้ .split(" ") แบ่งด้วยช่องว่าง
      const token = authorization.split(" ")[1];
      console.log(token)
      // Verify token
      jwt.verify(token, process.env.SECRET, (err, decode) => {
         if (err) {
            return createError(401, "Unauthorized !!22222222");
         }
         // สร้าง property user  = decode ( ข้อมูลuser จาก token)
         req.user = decode;
         // console.log(req)
         next();
      });
   } catch (error) {
      next(error);
   }
};