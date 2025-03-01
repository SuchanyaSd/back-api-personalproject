
const cloudinary = require("../configs/cloudinary")
const prisma = require("../configs/prisma")
const createError = require("../utils/createError")

exports.addProduct = async (req, res, next) => {
   try {

      const { name, description, price, category, sizes, bestseller } = req.body

      const optionData = {}

      if (description) {
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

exports.getProduct = async (req, res, next) => {
   try {
      const { productId } = req.params;

      const product = await prisma.product.findUnique({
         where: { id: Number(productId) },
         select: {
            id: true,
            name: true,
            description: true,
            price: true,
            bestseller: true,
            AllImages: {
               select: {
                  url: true,
               },
            },
            sizes: {
               select: {
                  size: {
                     select: {
                        size: true,
                     },
                  },
               },
            },
         },
      });

      if (!product) {
         return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
   } catch (error) {
      console.error("Error fetching product:", error);
      next(error);
   }
};

exports.getAllProducts = async (req, res, next) => {
   try {
      const products = await prisma.product.findMany({
         select: {
            id: true,
            name: true,
            description: true,
            price: true,
            bestseller: true,
            AllImages: {
               select: {
                  url: true,
               },
            },
            sizes: {
               select: {
                  size: {
                     select: {
                        size: true,
                     },
                  },
               },
            },
         },
      });

      res.status(200).json(products);
   } catch (error) {
      console.error("Error fetching products:", error);
      next(error);
   }
};

exports.editProduct = async (req, res, next) => {
   try {
      const { productId } = req.params;
      const { name, description, price, bestseller } = req.body;

      const updatedProduct = await prisma.product.update({
         where: { id: Number(productId) },
         data: {
            name,
            description,
            price,
            bestseller,
         },
      });

      res.status(200).json(updatedProduct);
   } catch (error) {
      console.error("Error updating product:", error);
      next(error);
   }
};

exports.deleteProduct = async (req, res, next) => {
   try {
      const { productId } = req.params;

      await prisma.product.delete({
         where: { id: Number(productId) },
      });

      res.status(200).json({ message: "Product deleted successfully" });
   } catch (error) {
      console.error("Error deleting product:", error);
      next(error);
   }
};