import express from 'express'
import fetchData from './fetchData.js'
import nodeCache from 'node-cache'

const characters = await fetchData()
const cache = new nodeCache({ stdTTL: 300 })
cache.set('characters', characters)

const cachedData = cache.get('characters')
function findFromCache(id) {
    let result
    cachedData.map((element) => {
        if (element.id === id) {
            result = element
        }
    })
    return result
}

const app = express()
const port = 3000

let id = 1009146

app.get('/', (req, res) => {
    res.send(findFromCache(id))
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
