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

exports.getCustomerId = async (req, res, next) => {
   try {
      // ดึง token จาก request header
      const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

      if (!token) {
         return res.status(401).json({ message: "Unauthorized: No token provided" });
      }

      // ตรวจสอบและถอดรหัส token
      const decoded = jwt.verify(token, process.env.SECRET);
      const userId = decoded.id;

      // ค้นหา user ใน database
      const user = await prisma.user.findUnique({
         where: { id: userId },
         select: { id: true }, // เลือกเฉพาะ customerId (id)
      });

      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }

      res.json({ customerId: user.id });

   } catch (error) {
      next(error);
   }
};