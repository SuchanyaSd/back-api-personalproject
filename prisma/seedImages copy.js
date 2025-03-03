const fs = require("fs");
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();
const imageFolderPath = require ("path").join(__dirname, "..", "public", "uploads");

const seedImages = async () => {
   try {
      const imageFiles = fs.readdirSync(imageFolderPath); // อ่านไฟล์ทั้งหมดในโฟลเดอร์

      const imageRecords = imageFiles.map((file) => ({
         url: `http://localhost:8008/uploads/${file}`, // สร้าง URL
      }));

      await prisma.allImages.createMany({
         data: imageRecords,
      });

      console.log("✅ All images uploaded successfully!");
   } catch (error) {
      console.error("❌ Error uploading images:", error);
   } finally {
      await prisma.$disconnect();
   }
};

seedImages();



// const fs = require("fs");
// const { PrismaClient } = require("@prisma/client");
// const path = require('path');

// const prisma = new PrismaClient();
// const imageFolderPath = path.join(__dirname, '..', 'public', 'img');

// const seedImages = async () => {
//    try {
//       const imageFiles = fs.readdirSync(imageFolderPath); // อ่านไฟล์ทั้งหมดในโฟลเดอร์

//       const imageRecords = imageFiles.map((file) => ({
//          url: `http://localhost:8008/img/${file}`, // สร้าง URL
//       }));

//       await prisma.allImages.createMany({
//          data: imageRecords,
//       });

//       console.log("✅ All images uploaded successfully!");
//    } catch (error) {
//       console.error("❌ Error uploading images:", error);
//    } finally {
//       await prisma.$disconnect();
//    }
// };

// seedImages();




// const fs = require("fs");
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// const imageFolderPath = "./public/uploads/";

// const uploadImagesToDatabase = async () => {
//   try {
//     const imageFiles = fs.readdirSync(imageFolderPath); // อ่านไฟล์ทั้งหมดในโฟลเดอร์

//     const imageRecords = imageFiles.map((file) => ({
//       url: `http://localhost:3000/uploads/${file}`, // สร้าง URL
//     }));

//     await prisma.allImages.createMany({
//       data: imageRecords,
//     });

//     console.log("✅ All images uploaded successfully!");
//   } catch (error) {
//     console.error("❌ Error uploading images:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// uploadImagesToDatabase();
