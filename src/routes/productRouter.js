import  express  from "express"
import produtoById from "../controllers/produto/ProdutoById.js"
import createProduto from "../controllers/produto/createProduto.js"
import editProduto from "../controllers/produto/editProduto.js"
import editNameProduto from "../controllers/produto/editNameProduto.js"
import deleteProduto from "../controllers/produto/deleteProduto.js"

const router = express.Router()

router.get('/', produtoById)
router.post('/', createProduto)
router.put('/', editProduto)
router.patch('/', editNameProduto)
router.delete('/', deleteProduto)

export default router