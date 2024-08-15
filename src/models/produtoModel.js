 import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
 

export const getAll = async () => {
   const produtos = await prisma.produto.findMany()
   return produtos
}

 const create = () => {

}

export default {getAll, create}


