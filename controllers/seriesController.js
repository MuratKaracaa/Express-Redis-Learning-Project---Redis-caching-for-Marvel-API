import { getAsync } from '../utils/redisConfig.js'
import { appendToCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

categories.push('characters', 'thumbnail')

async function seriesAPI(req, res) {
    const series = JSON.parse(await getAsync('series'))
    const { serieID } = req.params

    const serie = series
        .flat()
        .find((element) => element.id === Number(serieID))
    if (serieID) {
        const marvelSource = 'http://gateway.marvel.com/v1/public/series/'
        const reqId = req.url.match(/\d+/g)[0]
        if (serie) {
            let category = categories.find((cat) => req.url.includes(cat))
            console.log(category)

            if (category && serie[category] && serie[category].items) {
                return res.status(200).json(serie[category].items)
            } else if (category && serie[category] && !serie[category].items) {
                return res.status(200).json(serie[category])
            } else {
                return res.status(200).json(serie)
            }
        } else {
            try {
                return appendToCache(marvelSource + reqId).then(() => {
                    seriesAPI(req, res)
                })
            } catch {
                return res.status(404).send("serie doesn't exist")
            }
        }
    }

    return res.status(200).json(series.flat())
}

export default seriesAPI
