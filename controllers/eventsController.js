import { getAsync } from '../utils/redisConfig.js'
import { appendToCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

categories.push('characters', 'thumbnail')

async function eventsAPI(req, res) {
    const events = JSON.parse(await getAsync('events'))
    const { eventID } = req.params

    const event = events
        .flat()
        .find((element) => element.id === Number(eventID))
    if (eventID) {
        const marvelSource = 'http://gateway.marvel.com/v1/public/events/'
        const reqId = req.url.match(/\d+/g)[0]
        if (event) {
            let category = categories.find((cat) => req.url.includes(cat))
            console.log(category)

            if (category && event[category] && event[category].items) {
                return res.status(200).json(event[category].items)
            } else if (category && event[category] && !event[category].items) {
                return res.status(200).json(event[category])
            } else {
                return res.status(200).json(event)
            }
        } else {
            try {
                return appendToCache(marvelSource + reqId).then(() => {
                    eventsAPI(req, res)
                })
            } catch {
                return res.status(404).send("event doesn't exist")
            }
        }
    }

    return res.status(200).json(events.flat())
}

export default eventsAPI
