import cache from '../utils/cache.js'

const { creators } = await cache()

function creatorsAPI(req, res) {
    const { creatorID } = req.params
    const creator = creators
        .flat()
        .find((element) => element.id === Number(creatorID))
    return {
        creators: function () {
            if (creators) {
                return res.status(200).json(creators.flat())
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorEndPoints: function () {
            if (creator) {
                return res.status(200).json(creator)
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorCharacters: function () {
            if (creator) {
                return res.status(200).json(creator.characters.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorSeries: function () {
            if (creator) {
                return res.status(200).json(creator.series.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorStories: function () {
            if (creator) {
                return res.status(200).json(creator.stories.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorEvents: function () {
            if (creator) {
                return res.status(200).json(creator.events.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        creatorComics: function () {
            if (character) {
                return res.status(200).json(creator.comics.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default creatorsAPI
