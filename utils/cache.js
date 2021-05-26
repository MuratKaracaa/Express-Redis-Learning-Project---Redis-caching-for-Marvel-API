import redis from 'redis'
import fetchData from './fetchData.js'
import util from 'util'

const characters = await fetchData()
const client = redis.createClient(6379)

const getAsync = util.promisify(client.get).bind(client)
const setAsync = util.promisify(client.set).bind(client)

async function cache() {
    await setAsync('characters', JSON.stringify(characters))
    const cache = JSON.parse(await getAsync('characters'))
    return cache
}

export default cache
