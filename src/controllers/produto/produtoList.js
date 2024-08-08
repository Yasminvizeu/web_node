import produtoModel from "../../models/produtoModel";

const produtoList = (req, res) => {
    const produto = produtoModel.getAll()
    res.json(produto)
}

export default produtoList;
