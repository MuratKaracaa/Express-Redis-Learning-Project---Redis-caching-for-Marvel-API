import { getAsync } from '../utils/redisConfig.js'
import { appendToCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

let stories = JSON.parse(await getAsync('stories'))
categories.push('characters', 'thumbnail')

function storiesAPI(req, res) {
    const { storyID } = req.params

    const story = stories
        .flat()
        .find((element) => element.id === Number(storyID))
    if (storyID) {
        const marvelSource = 'http://gateway.marvel.com/v1/public/stories/'
        const reqId = req.url.match(/\d+/g)[0]
        if (story) {
            let category = categories.find((cat) => req.url.includes(cat))

            if (category && story[category] && story[category].items) {
                return res.status(200).json(story[category].items)
            } else if (category && story[category] && !story[category].items) {
                return res.status(200).json(story[category])
            } else {
                return res.status(200).json(story)
            }
        } else {
            try {
                appendToCache(marvelSource + reqId).then((val) => {
                    stories = val
                    storiesAPI(req, res)
                })
            } catch {
                return res.status(404).send("story doesn't exist")
            }
        }
    }

    return {
        stories: function () {
            return res.status(200).json(stories.flat())
        },
    }
}

export default storiesAPI
