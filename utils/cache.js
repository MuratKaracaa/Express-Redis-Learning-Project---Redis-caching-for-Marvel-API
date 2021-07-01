import characterData from './fetchCharacterData.js'
import { getAsync, setAsync, keysAsync } from './redisConfig.js'
import categories from '../lists/categories.js'
import axios from 'axios'
import * as $ from './apiAuth.js'

const initialCache = async () => {
    await setAsync('characters', JSON.stringify(characterData))
    const characterCache = JSON.parse(await getAsync('characters'))

    for await (const category of categories) {
        await setAsync(category, JSON.stringify([]))
    }
    return characterCache
}

const appendToCache = async (url) => {
    const category = categories.find((cat) => url.includes(cat))
    const data = await (await axios.get(url + $.urlSuffix)).data.data.results[0]

    const existingCache = await getAsync(category)
    await setAsync(
        category,
        JSON.stringify([...JSON.parse(existingCache), data])
    )
    const newCache = JSON.parse(await getAsync(category))
    return newCache
}

export { initialCache, appendToCache }
