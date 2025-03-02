// Seed data for the database
const p_img1 = "../configs/frontend_assets/p_img1.png"
const p_img2_1 = '../configs/frontend_assets/p_img2_1.png'
const p_img2_2 = '../configs/frontend_assets/p_img2_2.png'
const p_img2_3 = '../configs/frontend_assets/p_img2_3.png'
const p_img2_4 = '../configs/frontend_assets/p_img2_4.png'
const p_img3 = '../configs/frontend_assets/p_img3.png'
const p_img4 = '../configs/frontend_assets/p_img4.png'
const p_img5 = '../configs/frontend_assets/p_img5.png'
const p_img6 = '../configs/frontend_assets/p_img6.png'
const p_img7 = '../configs/frontend_assets/p_img7.png'
const p_img8 = '../configs/frontend_assets/p_img8.png'
const p_img9 = '../configs/frontend_assets/p_img9.png'
const p_img10 = '../configs/frontend_assets/p_img10.png'
const p_img11 = '../configs/frontend_assets/p_img11.png'
const p_img12 = '../configs/frontend_assets/p_img12.png'
const p_img13 = '../configs/frontend_assets/p_img13.png'
const p_img14 = '../configs/frontend_assets/p_img14.png'
const p_img15 = '../configs/frontend_assets/p_img15.png'
const p_img16 = '../configs/frontend_assets/p_img16.png'
const p_img17 = '../configs/frontend_assets/p_img17.png'
const p_img18 = '../configs/frontend_assets/p_img18.png'
const p_img19 = '../configs/frontend_assets/p_img19.png'
const p_img20 = '../configs/frontend_assets/p_img20.png'
const p_img21 = '../configs/frontend_assets/p_img21.png'
const p_img22 = '../configs/frontend_assets/p_img22.png'
const p_img23 = '../configs/frontend_assets/p_img23.png'
const p_img24 = '../configs/frontend_assets/p_img24.png'
const p_img25 = '../configs/frontend_assets/p_img25.png'
const p_img26 = '../configs/frontend_assets/p_img26.png'
const p_img27 = '../configs/frontend_assets/p_img27.png'
const p_img28 = '../configs/frontend_assets/p_img28.png'
const p_img29 = '../configs/frontend_assets/p_img29.png'
const p_img30 = '../configs/frontend_assets/p_img30.png'
const p_img31 = '../configs/frontend_assets/p_img31.png'
const p_img32 = '../configs/frontend_assets/p_img32.png'
const p_img33 = '../configs/frontend_assets/p_img33.png'
const p_img34 = '../configs/frontend_assets/p_img34.png'
const p_img35 = '../configs/frontend_assets/p_img35.png'
const p_img36 = '../configs/frontend_assets/p_img36.png'
const p_img37 = '../configs/frontend_assets/p_img37.png'
const p_img38 = '../configs/frontend_assets/p_img38.png'
const p_img39 = '../configs/frontend_assets/p_img39.png'
const p_img40 = '../configs/frontend_assets/p_img40.png'
const p_img41 = '../configs/frontend_assets/p_img41.png'
const p_img42 = '../configs/frontend_assets/p_img42.png'
const p_img43 = '../configs/frontend_assets/p_img43.png'
const p_img44 = '../configs/frontend_assets/p_img44.png'
const p_img45 = '../configs/frontend_assets/p_img45.png'
const p_img46 = '../configs/frontend_assets/p_img46.png'
const p_img47 = '../configs/frontend_assets/p_img47.png'
const p_img48 = '../configs/frontend_assets/p_img48.png'
const p_img49 = '../configs/frontend_assets/p_img49.png'
const p_img50 = '../configs/frontend_assets/p_img50.png'
const p_img51 = '../configs/frontend_assets/p_img51.png'
const p_img52 = '../configs/frontend_assets/p_img52.png'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const products = [
//    {
//       id: 1,
//       name: "Women Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 100,
//       image: ["image1.jpg"],
//       category: "Women",
//       sizes: ["S", "M", "L"],
//       date: 1716634345448,
//       bestseller: true
//    },
//    {
//       id: 2,
//       name: "Men Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 200,
//       image: ["image2_1.jpg", "image2_2.jpg", "image2_3.jpg", "image2_4.jpg"],
//       category: "Men",
//       sizes: ["M", "L", "XL"],
//       date: 1716621345448,
//       bestseller: true
//    },
//    {
//       id: 3,
//       name: "Girls Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 220,
//       image: ["image3.jpg"],
//       category: "Kids",
//       sizes: ["S", "L", "XL"],
//       date: 1716234545448,
//       bestseller: true
//    },
//    {
//       id: 4,
//       name: "Men Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 110,
//       image: ["image4.jpg"],
//       category: "Men",
//       sizes: ["S", "M", "XXL"],
//       date: 1716621345448,
//       bestseller: true
//    },
//    {
//       id: 5,
//       name: "Women Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 130,
//       image: ["image5.jpg"],
//       category: "Women",
//       sizes: ["M", "L", "XL"],
//       date: 1716622345448,
//       bestseller: true
//    },
//    {
//       id: 6,
//       name: "Girls Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 140,
//       image: ["image6.jpg"],
//       category: "Kids",
//       sizes: ["S", "L", "XL"],
//       date: 1716623423448,
//       bestseller: true
//    },
//    {
//       id: 7,
//       name: "Men Tapered Fit Flat-Front Trousers",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 190,
//       image: ["image7.jpg"],
//       category: "Men",
//       sizes: ["S", "L", "XL"],
//       date: 1716621542448,
//       bestseller: false
//    },
//    {
//       id: 8,
//       name: "Men Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 140,
//       image: ["image8.jpg"],
//       category: "Men",
//       sizes: ["S", "M", "L", "XL"],
//       date: 1716622345448,
//       bestseller: false
//    },
//    {
//       id: 9,
//       name: "Girls Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 100,
//       image: ["image9.jpg"],
//       category: "Kids",
//       sizes: ["M", "L", "XL"],
//       date: 1716621235448,
//       bestseller: false
//    },
//    {
//       id: 10,
//       name: "Men Tapered Fit Flat-Front Trousers",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 110,
//       image: ["image10.jpg"],
//       category: "Men",
//       sizes: ["S", "L", "XL"],
//       date: 1716622235448,
//       bestseller: false
//    },
//    {
//       id: 11,
//       name: "Men Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 120,
//       image: ["image11.jpg"],
//       category: "Men",
//       sizes: ["S", "M", "L"],
//       date: 1716623345448,
//       bestseller: false
//    },
//    {
//       id: 12,
//       name: "Men Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 150,
//       image: ["image12.jpg"],
//       category: "Men",
//       sizes: ["S", "M", "L", "XL"],
//       date: 1716624445448,
//       bestseller: false
//    },
//    {
//       id: 13,
//       name: "Women Round Neck Cotton Top",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 130,
//       image: ["image13.jpg"],
//       category: "Women",
//       sizes: ["S", "M", "L", "XL"],
//       date: 1716625545448,
//       bestseller: false
//    },
//    {
//       id: 14,
//       name: "Boy Round Neck Pure Cotton T-shirt",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 160,
//       image: ["image14.jpg"],
//       category: "Kids",
//       sizes: ["S", "M", "L", "XL"],
//       date: 1716626645448,
//       bestseller: false
//    },
//    {
//       id: 15,
//       name: "Men Tapered Fit Flat-Front Trousers",
//       description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
//       price: 140,
//       image: ["image15.jpg"],
//       category: "Men",
//       sizes: ["S", "M", "L", "XL"],
//       date: 1716627745448,
//       bestseller: false
//    },
// ]

const products = [
   {
      id: 1,
      name: "Women Round Neck Cotton Top",
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 100,
      image: [p_img1],
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
      image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
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
      image: [p_img3],
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
      image: [p_img4],
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
      image: [p_img5],
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
      image: [p_img6],
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
      image: [p_img7],
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
      image: [p_img8],
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
      image: [p_img9],
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
      image: [p_img10],
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
      image: [p_img11],
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
      image: [p_img12],
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
      image: [p_img13],
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
      image: [p_img14],
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
      image: [p_img15],
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
      image: [p_img16],
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
      image: [p_img17],
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
      image: [p_img18],
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
      image: [p_img19],
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
      image: [p_img20],
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
      image: [p_img21],
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
      image: [p_img22],
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
      image: [p_img23],
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
      image: [p_img24],
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
      image: [p_img25],
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
      image: [p_img26],
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
      image: [p_img27],
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
      image: [p_img28],
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
      image: [p_img29],
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
      image: [p_img30],
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
      image: [p_img31],
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
      image: [p_img32],
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
      image: [p_img33],
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
      image: [p_img34],
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
      image: [p_img35],
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
      image: [p_img36],
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
      image: [p_img37],
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
      image: [p_img38],
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
      image: [p_img39],
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
      image: [p_img40],
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
      image: [p_img41],
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
      image: [p_img42],
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
      image: [p_img43],
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
      image: [p_img44],
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
      image: [p_img45],
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
      image: [p_img46],
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
      image: [p_img47],
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
      image: [p_img48],
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
      image: [p_img49],
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
      image: [p_img50],
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
      image: [p_img51],
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
      image: [p_img52],
      category: "Men",
      subCategory: "Winterwear",
      sizes: ["S", "M", "L", "XL"],
      date: 1716668445448,
      bestseller: false
   }

]


const main = async () => {

   try {
      for (const product of products) {
         // 1. สร้าง Category (ถ้ายังไม่มี)
         let category = await prisma.category.findUnique({
            where: { name: product.category },
         });
         if (!category) {
            category = await prisma.category.create({
               data: { name: product.category },
            });
         }

         // 2. สร้าง Product
         const createdProduct = await prisma.product.create({
            data: {
               id: product.id,
               name: product.name,
               description: product.description,
               price: product.price,
               categoryId: category.id,
               bestseller: product.bestseller,
               date: new Date(product.date),
            },
         });

         // 3. สร้าง Size และ ProductSize (ความสัมพันธ์ many-to-many)
         for (const sizeName of product.sizes) {
            let size = await prisma.size.findUnique({
               where: { size: sizeName },
            });
            if (!size) {
               size = await prisma.size.create({
                  data: { size: sizeName },
               });
            }
            await prisma.productSize.create({
               data: {
                  productId: createdProduct.id,
                  sizeId: size.id,
               },
            });
         }

         // 4. สร้าง AllImages
         for (const imageUrl of product.image) {
            await prisma.allImages.create({
               data: {
                  productId: createdProduct.id,
                  url: imageUrl,
               },
            });
         }
      }
      console.log('Seed data inserted successfully.');
   } catch (error) {
      console.error('Error seeding data:', error);
   } finally {
      await prisma.$disconnect();
   }
};

main();