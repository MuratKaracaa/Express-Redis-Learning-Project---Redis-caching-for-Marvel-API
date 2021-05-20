import express from 'express'
import fetchData from './fetchData.js'
import nodeCache from 'node-cache'

const characters = await fetchData()
const cache = new nodeCache({ stdTTL: 10000 })
cache.set('characters', characters)

const cachedData = cache.get('characters')

const app = express()
const port = 3000

app.get('/api/characters/:characterID', (req, res) => {
    const { characterID } = req.params
    const character = cachedData.find(
        (element) => element.id === Number(characterID)
    )
    res.json(character)
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
