import { update } from "../../models/userModel.js"

const editNameUser = async (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const user = { id: +id, name  }

    const result = await update(user)

    //erro 401 quando os dados nao chegam corretos
    if (!result)
        return res.status(401).json({
            error: "erro ao atualizar nme do usuario"
        })


    return res.json({
        success: "Nome do usuário atualizado com sucesso",
        user: result
    })}

export default editNameUser