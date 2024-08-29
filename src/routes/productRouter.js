import  express  from "express"
import produtoById from "../controllers/produto/produtoById.js"
import createProduto from "../controllers/produto/createProduto.js"
import editProduto from "../controllers/produto/editProduto.js"
import editValorProduto from "../controllers/produto/editValorProduto.js"
import deleteProduto from "../controllers/produto/deleteProduto.js"
import produtoList from "../controllers/produto/produtoList.js"

const router = express.Router()

router.post('/', createProduto)
router.get('/list', produtoList)
router.get('/:id', produtoById)
router.put('/:id', editProduto)
router.patch('/:id', editValorProduto)
router.delete('/:id', deleteProduto)

export default router