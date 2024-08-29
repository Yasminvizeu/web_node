import { create } from "../../models/produtoModel.js"

const createProduto = async(req, res) => {
    const produto = req.body

    const result = await create(produto)

    if(!result)
        return res.status(500).json({
            error: "erro ao criar produto"
        })
    
    return res.json({
        success:"Produto criado com sucesso"
    })

}

export default createProduto