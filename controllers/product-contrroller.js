
const cloudinary = require("../configs/cloudinary")
const prisma = require("../configs/prisma")
const createError = require("../utils/createError")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.addProduct = async (req, res, next) => {
   try {

      const { name, description, price, category, subCategory, sizes, bestseller } = req.body

      const optionData = {}

      if(description) {
         optionData.description = description
      }

      const images = req.files



      let imagesUrl = await Promise.all(
         images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
            return result
         })
      )

      console.log(images)
      console.log(imagesUrl)

      const product = await prisma.product.create({
         data: {
           name,
           price: Number(price),
           ...optionData,
           category: {
             connectOrCreate: {
               where: { name: category },
               create: { name: category },
             },
           },
           sizes: {
             create: [
               { size: { connectOrCreate: { where: { size: "S" }, create: { size: "S" } } } },
               { size: { connectOrCreate: { where: { size: "M" }, create: { size: "M" } } } },
               { size: { connectOrCreate: { where: { size: "L" }, create: { size: "L" } } } },
             ],
           },
           AllImages: {
             create: imagesUrl.map((item) => ({
               url: item.secure_url,
             })),
           },
         },
       });
       

      console.log(product)
      

      res.json({ message: "add product", })
   } catch (err) {
      console.log(err)
      next(err)
   }


}

exports.listProduct = async (req, res, next) => {
   try {
      res.json({ message: "listProduct" })
   } catch (err) {
      next()
   }
}

exports.removeProduct = async (req, res, next) => {
   try {
      res.json({ message: "removeProduct" })
   } catch (err) {
      next()
   }
}

exports.singleProduct = async (req, res, next) => {
   try {
      res.json({ message: "singleProduct" })
   } catch (err) {
      next()
   }
}