import express from 'express'
import cors from 'cors'
import * as charCont from './controllers/characterControllers.js'

const app = express()
const port = 5000

app.use(cors())

app.get('/api/v1/characters/:characterID', charCont.characterEndPoints)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
