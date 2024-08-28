import { getById } from "../../models/userModel.js"

const userById = async (req, res) => {
    //distruct permite pegar varias variaveis do objeto params
    const {id} = req.params
    //simbolo de + converte pra inteiro
    const user = await getById(+id)
    if(user)
     res.json({message: "User get by id", user})
    else
        return res.status(404).json({
            error:"Usuário não encontrado"
        })
}

export default userById