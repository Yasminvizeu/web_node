import produtoModel from "../../models/produtoModel.js";

const produtoList = async (req, res) => {
    const produto = await produtoModel.getAll()
    res.json(produto)
}

export default produtoList;
