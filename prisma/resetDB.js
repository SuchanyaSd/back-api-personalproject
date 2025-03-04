require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function resetDatabase() {
	await prisma.$transaction([
		prisma.productSize.deleteMany(),
      prisma.allImages.deleteMany(),
		prisma.product.deleteMany(),
		prisma.size.deleteMany(),
		prisma.category.deleteMany(),
		prisma.order.deleteMany(),
		prisma.order_Item.deleteMany(),
	])
  await prisma.$executeRawUnsafe('Alter Table User auto_increment=1')
}

console.log('Reset DB...')
resetDatabase()