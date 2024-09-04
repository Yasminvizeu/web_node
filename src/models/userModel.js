import { PrismaClient } from "@prisma/client"
import { z } from "zod"

const prisma = new PrismaClient()
//ideal sempre começa com o tipo primitivo pq ele vai ter a s funções especificas relacionadas a ele
const userschema=z.object({
    id: z.number({message:" o id deve ser um numero inteiro"})
        .positive({message:" o id deve ser um numero positivo"}),
    name: z.string({message:"  nome deve ser string"})
        .min(3, {message:" o nome deve ter no min 3 caracteres"})
        .max(100, {message:" o nome deve ter no max 200 caracteres"}),
    email : z.string({message:"  email deve ser string"})
        .email({message:"  email invalido"})
        .max(200, {message:" o email deve ter no max 200 caracteres"}),
    pass: z.string({
        required_error:"  senha obrigatria",
        invalid_type_error: "senha deve ser uma string"
        })
        .min(6, {message:" o pass deve ter no min 6 caracteres"})
        .max(256, {message:" o pass deve ter no max 256 caracteres"})
})

export const validateUser = (user) => {
    return userschema.safeParse(user)
}

export const validateUserToCreate = (user) => {
    const partialUserSchema = userschema.partial({
        id: true
    })
    return partialUserSchema.safeParse(user)
}

export const getAll = async () => {
   const users =  await prisma.user.findMany({
    select: {
        id: true,
        name: true, 
        email: true
    }
   })  
   return users  
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true, 
            email: true
        }
    })
    return user
}
//o selecte selecion apenas oque vc quer mostar
export const create = async (user) => {
    const result = await prisma.user.create({
        data: user,
        select: {
            id: true
        }
    })
    return result
}

export const remove = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id
        }
    })
    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where: {
            id: user.id
        },
        data: user,
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return result
}


//export default {getAll, create}


