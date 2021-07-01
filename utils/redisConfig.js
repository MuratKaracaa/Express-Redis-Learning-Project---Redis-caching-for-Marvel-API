import redis from 'redis'
import util from 'util'

const client = redis.createClient(6379)

const getAsync = util.promisify(client.get).bind(client)
const setAsync = util.promisify(client.set).bind(client)
const keysAsync = util.promisify(client.keys).bind(client)

export { client, getAsync, setAsync, keysAsync }
