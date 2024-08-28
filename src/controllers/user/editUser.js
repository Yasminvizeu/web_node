
import { update } from "../../models/userModel.js"


const editUser = async (req, res) => {
    const { id } = req.params
    const user = req.body

    user.id = +id

    const result = await update(user)

    //erro 401 quando os dados nao chegam corretos
    if (!result)
        return res.status(401).json({
            error: "erro ao atualizar usuario"
        })


    return res.json({
        success: "Usuário atualizado com sucesso",
        user: result
    })

}

export default editUser