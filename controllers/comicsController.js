import { getAsync } from '../utils/redisConfig.js'
import { appendToCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

categories.push('characters', 'thumbnail')

async function comicsAPI(req, res) {
    const comics = JSON.parse(await getAsync('comics'))
    const { comicID } = req.params

    const comic = comics
        .flat()
        .find((element) => element.id === Number(comicID))
    if (comicID) {
        const marvelSource = 'http://gateway.marvel.com/v1/public/comics/'
        const reqId = req.url.match(/\d+/g)[0]
        if (comic) {
            let category = categories.find((cat) => req.url.includes(cat))
            console.log(category)

            if (category && comic[category] && comic[category].items) {
                return res.status(200).json(comic[category].items)
            } else if (category && comic[category] && !comic[category].items) {
                return res.status(200).json(comic[category])
            } else {
                return res.status(200).json(comic)
            }
        } else {
            try {
                return appendToCache(marvelSource + reqId).then(() => {
                    comicsAPI(req, res)
                })
            } catch {
                return res.status(404).send("comic doesn't exist")
            }
        }
    }

    return res.status(200).json(comics.flat())
}

export default comicsAPI
