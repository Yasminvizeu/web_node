import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
 

export const getAll = async () => {
   const produtos = await prisma.produto.findMany()
   return produtos
}

export const getById = async (id) => {
   const produtos = await prisma.produto.findUnique({
      select: {
         id: true,
         nome: true,
         valor: true
     }
   })
   return produtos
}

export const create = async (produto) => {
   const result = await prisma.produto.create({
      data: produto,
      select: {
         id:true
      }
   })
   return result
}

export const remove = async (id) => {
   const produto = await prisma.produto.delete({
      where: {
         id
      }
   })
   return produto
}


export const update = async (produto) => {
   const result = await prisma.produto.update({
      where: {
         id: produto.id
      },
      data: produto,
      select: {
         id: true,
         nome: true,
         valor: true
     }
   })
   return produto
}



export default {getAll}


