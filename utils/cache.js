import redis from 'redis'
import fetchData from './fetchData.js'
import util from 'util'

const data = await fetchData()
const client = redis.createClient(6379)

const getAsync = util.promisify(client.get).bind(client)
const setAsync = util.promisify(client.set).bind(client)
const keysAsync = util.promisify(client.keys).bind(client)

async function cache() {
    const totalCache = []
    const categories = Object.keys(data)
    const values = Object.values(data)
    categories.map(async (category, index) => {
        await setAsync(category, JSON.stringify(values[index]))
    })
    const keys = await keysAsync('*')
    for await (const key of keys) {
        totalCache[key] = []
        const cache = JSON.parse(await getAsync(key))
        totalCache[key].push(cache)
    }
    return totalCache
}

export default cache
