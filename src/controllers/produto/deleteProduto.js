import { remove } from "../../models/produtoModel.js" 

const deleteProduto = async (req, res) => {
    const {id} = req.params
    const produto = await remove(+id)
   
    if(!produto)
    return res.status(404).json({
        error:"Produto não encontrado"
    })
    
    return res.json({
        success: "Produto removido com sucesso", 
        produto
    })}

export default deleteProduto