import  express  from "express"
//import produtoById from "../controllers/produto/produtoById.js"
import createProduto from "../controllers/produto/createProduto.js"
import editProduto from "../controllers/produto/editProduto.js"
import editPhotoProduto from "../controllers/produto/editPhotoProduto.js"
import deleteProduto from "../controllers/produto/deleteProduto.js"
import produtoList from "../controllers/produto/produtoList.js"

const router = express.Router()

router.get('/', produtoList)
router.post('/', createProduto)
router.put('/', editProduto)
router.patch('/', editPhotoProduto)
router.delete('/', deleteProduto)

export default router