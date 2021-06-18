import express from 'express'
import cors from 'cors'
import * as $ from './routes/index.js'

const app = express()
const port = 5000

app.use(cors())

app.use('/api/v1/characters', $.charactersRouter)
app.use('/api/v1/comics', $.comicsRouter)
app.use('/api/v1/creators', $.creatorsRouter)
app.use('/api/v1/events', $.eventsRouter)
app.use('/api/v1/series', $.seriesRouter)
app.use('/api/v1/stories', $.storiesRouter)

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
