import express from 'express'
import "express-async-errors"
import { errorMiddleware} from './middlewares/errorHandler'
import { cardRoutes } from './routes/cardRoutes.routes'
import { duelRoutes } from './routes/duelRoutes.routes'

const app = express()

const PORT = 3000

app.use(express.json())

//Rotas
app.use('/cards', cardRoutes)
app.use('/duels', duelRoutes)

//Error Handler
app.use(errorMiddleware)

app.listen(PORT, () => console.log('Server is running!'))