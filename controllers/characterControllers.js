import cache from '../utils/cache.js'

const cachedData = await cache()

function characterAPI(req, res) {
    const { characterID } = req.params
    const character = cachedData.characters
        .flat()
        .find((element) => element.id === Number(characterID))
    return {
        characters: function () {
            if (cachedData) {
                return res.status(200).json(cachedData)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterEndPoints: function () {
            if (character) {
                return res.status(200).json(character)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterComics: function () {
            if (character) {
                return res.status(200).json(character.comics.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterThumbnail: function () {
            if (character) {
                return res.status(200).json(character.thumbnail)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterSeries: function () {
            if (character) {
                return res.status(200).json(character.series.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterStories: function () {
            if (character) {
                return res.status(200).json(character.stories.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        characterEvents: function () {
            if (character) {
                return res.status(200).json(character.events.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default characterAPI
