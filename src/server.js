import express from 'express'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'

const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/produto', productRouter)


app.listen(3000, () => {
    console.log('Servidor Rodando em http://localhost:3000')
})