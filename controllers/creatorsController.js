import { getAsync } from '../utils/redisConfig.js'
import { appendToCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

let creators = JSON.parse(await getAsync('creators'))
categories.push('characters', 'thumbnail')

function creatorsAPI(req, res) {
    const { creatorID } = req.params

    const creator = creators
        .flat()
        .find((element) => element.id === Number(creatorID))
    if (creatorID) {
        const marvelSource = 'http://gateway.marvel.com/v1/public/creators/'
        const reqId = req.url.match(/\d+/g)[0]
        if (creator) {
            let category = categories.find((cat) => req.url.includes(cat))
            console.log(category)

            if (category && creator[category] && creator[category].items) {
                return res.status(200).json(creator[category].items)
            } else if (
                category &&
                creator[category] &&
                !creator[category].items
            ) {
                return res.status(200).json(creator[category])
            } else {
                return res.status(200).json(creator)
            }
        } else {
            try {
                appendToCache(marvelSource + reqId).then((val) => {
                    creators = val
                    creatorsAPI(req, res)
                })
            } catch {
                return res.status(404).send("creator doesn't exist")
            }
        }
    }

    return {
        creators: function () {
            return res.status(200).json(creators.flat())
        },
    }
}

export default creatorsAPI
