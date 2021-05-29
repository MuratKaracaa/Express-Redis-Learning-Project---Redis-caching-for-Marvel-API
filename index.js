import express from 'express'
import cors from 'cors'
import characterRouter from './routes/characterRoutes.js'

const app = express()
const port = 5000

app.use(cors())

app.use('/api/v1/characters', characterRouter)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
