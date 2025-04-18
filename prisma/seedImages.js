const products = [
   {
      id: 1,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 100,
      image: ["./img/p_img1.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["S", "M", "L"],
      date: 1716634345448,
      bestseller: true
   },
   {
      id: 2,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 200,
      image: ["./img/p_img2_1.png", "./img/p_img2_2.png", "./img/p_img2_3.png", "./img/p_img2_4.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["M", "L", "XL"],
      date: 1716621345448,
      bestseller: true
   },
   {
      id: 3,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 220,
      image: ["./img/p_img3.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "L", "XL"],
      date: 1716234545448,
      bestseller: true
   },
   {
      id: 4,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 110,
      image: ["./img/p_img4.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "XXL"],
      date: 1716621345448,
      bestseller: true
   },
   {
      id: 5,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 130,
      image: ["./img/p_img5.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["M", "L", "XL"],
      date: 1716622345448,
      bestseller: true
   },
   {
      id: 6,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 140,
      image: ["./img/p_img6.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "L", "XL"],
      date: 1716623423448,
      bestseller: true
   },
   {
      id: 7,
      name: "Men Tapered Fit Flat-Front Trousers",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 190,
      image: ["./img/p_img7.png"],
      category: "Men",
      subCategory: "Bottomwear",
      sizes: ["S", "L", "XL"],
      date: 1716621542448,
      bestseller: false
   },
   {
      id: 8,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 140,
      image: ["./img/p_img8.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716622345448,
      bestseller: false
   },
   {
      id: 9,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 100,
      image: ["./img/p_img9.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["M", "L", "XL"],
      date: 1716621235448,
      bestseller: false
   },
   {
      id: 10,
      name: "Men Tapered Fit Flat-Front Trousers",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 110,
      image: ["./img/p_img10.png"],
      category: "Men",
      subCategory: "Bottomwear",
      sizes: ["S", "L", "XL"],
      date: 1716622235448,
      bestseller: false
   },
   {
      id: 11,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 120,
      image: ["./img/p_img11.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L"],
      date: 1716623345448,
      bestseller: false
   },
   {
      id: 12,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 150,
      image: ["./img/p_img12.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716624445448,
      bestseller: false
   },
   {
      id: 13,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 130,
      image: ["./img/p_img13.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716625545448,
      bestseller: false
   },
   {
      id: 14,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 160,
      image: ["./img/p_img14.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716626645448,
      bestseller: false
   },
   {
      id: 15,
      name: "Men Tapered Fit Flat-Front Trousers",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 140,
      image: ["./img/p_img15.png"],
      category: "Men",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716627745448,
      bestseller: false
   },
   {
      id: 16,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 170,
      image: ["./img/p_img16.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716628845448,
      bestseller: false
   },
   {
      id: 17,
      name: "Men Tapered Fit Flat-Front Trousers",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 150,
      image: ["./img/p_img17.png"],
      category: "Men",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716629945448,
      bestseller: false
   },
   {
      id: 18,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 180,
      image: ["./img/p_img18.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716631045448,
      bestseller: false
   },
   {
      id: 19,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 160,
      image: ["./img/p_img19.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716632145448,
      bestseller: false
   },
   {
      id: 20,
      name: "Women Palazzo Pants with Waist Belt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 190,
      image: ["./img/p_img20.png"],
      category: "Women",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716633245448,
      bestseller: false
   },
   {
      id: 21,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 170,
      image: ["./img/p_img21.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716634345448,
      bestseller: false
   },
   {
      id: 22,
      name: "Women Palazzo Pants with Waist Belt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 200,
      image: ["./img/p_img22.png"],
      category: "Women",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716635445448,
      bestseller: false
   },
   {
      id: 23,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 180,
      image: ["./img/p_img23.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716636545448,
      bestseller: false
   },
   {
      id: 24,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 210,
      image: ["./img/p_img24.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716637645448,
      bestseller: false
   },
   {
      id: 25,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 190,
      image: ["./img/p_img25.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716638745448,
      bestseller: false
   },
   {
      id: 26,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 220,
      image: ["./img/p_img26.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716639845448,
      bestseller: false
   },
   {
      id: 27,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 200,
      image: ["./img/p_img27.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716640945448,
      bestseller: false
   },
   {
      id: 28,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 230,
      image: ["./img/p_img28.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716642045448,
      bestseller: false
   },
   {
      id: 29,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 210,
      image: ["./img/p_img29.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716643145448,
      bestseller: false
   },
   {
      id: 30,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 240,
      image: ["./img/p_img30.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716644245448,
      bestseller: false
   },
   {
      id: 31,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 220,
      image: ["./img/p_img31.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716645345448,
      bestseller: false
   },
   {
      id: 32,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 250,
      image: ["./img/p_img32.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716646445448,
      bestseller: false
   },
   {
      id: 33,
      name: "Girls Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 230,
      image: ["./img/p_img33.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716647545448,
      bestseller: false
   },
   {
      id: 34,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 260,
      image: ["./img/p_img34.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716648645448,
      bestseller: false
   },
   {
      id: 35,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 240,
      image: ["./img/p_img35.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716649745448,
      bestseller: false
   },
   {
      id: 36,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 270,
      image: ["./img/p_img36.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716650845448,
      bestseller: false
   },
   {
      id: 37,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 250,
      image: ["./img/p_img37.png"],
      category: "Women",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716651945448,
      bestseller: false
   },
   {
      id: 38,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 280,
      image: ["./img/p_img38.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716653045448,
      bestseller: false
   },
   {
      id: 39,
      name: "Men Printed Plain Cotton Shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 260,
      image: ["./img/p_img39.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716654145448,
      bestseller: false
   },
   {
      id: 40,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 290,
      image: ["./img/p_img40.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716655245448,
      bestseller: false
   },
   {
      id: 41,
      name: "Men Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 270,
      image: ["./img/p_img41.png"],
      category: "Men",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716656345448,
      bestseller: false
   },
   {
      id: 42,
      name: "Boy Round Neck Pure Cotton T-shirt",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 300,
      image: ["./img/p_img42.png"],
      category: "Kids",
      subCategory: "Topwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716657445448,
      bestseller: false
   },
   {
      id: 43,
      name: "Kid Tapered Slim Fit Trouser",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 280,
      image: ["./img/p_img43.png"],
      category: "Kids",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716658545448,
      bestseller: false
   },
   {
      id: 44,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 310,
      image: ["./img/p_img44.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716659645448,
      bestseller: false
   },
   {
      id: 45,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 290,
      image: ["./img/p_img45.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716660745448,
      bestseller: false
   },
   {
      id: 46,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 320,
      image: ["./img/p_img46.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716661845448,
      bestseller: false
   },
   {
      id: 47,
      name: "Kid Tapered Slim Fit Trouser",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 300,
      image: ["./img/p_img47.png"],
      category: "Kids",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716662945448,
      bestseller: false
   },
   {
      id: 48,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 330,
      image: ["./img/p_img48.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716664045448,
      bestseller: false
   },
   {
      id: 49,
      name: "Kid Tapered Slim Fit Trouser",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 310,
      image: ["./img/p_img49.png"],
      category: "Kids",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716665145448,
      bestseller: false
   },
   {
      id: 50,
      name: "Kid Tapered Slim Fit Trouser",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 340,
      image: ["./img/p_img50.png"],
      category: "Kids",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716666245448, bestseller: false
   },
   {
      id: 51,
      name: "Women Zip-Front Relaxed Fit Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 320,
      image: ["./img/p_img51.png"],
      category: "Women",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716667345448,
      bestseller: false
   },
   {
      id: 52,
      name: "Men Slim Fit Relaxed Denim Jacket",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 350,
      image: ["./img/p_img52.png"],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716668445448,
      bestseller: false
   }

]
// ---------------------------------------------------------------------

const { PrismaClient } = require("@prisma/client");
const path = require("path");

const prisma = new PrismaClient();

const seedImages = async () => {
   try {
      for (const product of products) {
         for (const imageFile of product.image) {
            const fileName = path.basename(imageFile); // ดึงชื่อไฟล์จาก path

            const imageRecord = {
               url: `http://localhost:8008/uploads/${fileName}`,
               productId: product.id,
            };

            await prisma.allImages.create({
               data: imageRecord,
            });
         }
      }

      console.log("✅ All images uploaded successfully!");
   } catch (error) {
      console.error("❌ Error uploading images:", error);
   } finally {
      await prisma.$disconnect();
   }
};

seedImages();