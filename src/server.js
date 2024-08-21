import express from 'express'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import { ENVIRONMENT, HOST, PORT } from './routes/config.js'

const app = express()
const port = PORT
const host = HOST
const environment = ENVIRONMENT

app.use('/user', userRouter)
app.use('/produto', productRouter)


app.listen(PORT, () => {

    
    console.log(`Servidor Rodando no ambiente ${environment} em ${ environment == 'production' ? host : host+':'+port }`);
})
