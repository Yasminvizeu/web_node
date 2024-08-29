import { update } from "../../models/produtoModel.js"


const editValorProduto =async (req, res) => {
    const { id } = req.params
    const { valor } = req.body

    const produto = { id: +id, valor  }

    const result = await update(produto)

    //erro 401 quando os dados nao chegam corretos
    if (!result)
        return res.status(401).json({
            error: "erro ao atualizar nme do usuario"
        })


    return res.json({
        success: "Nome do usuário atualizado com sucesso",
        produto: result
    })
}

export default editValorProduto