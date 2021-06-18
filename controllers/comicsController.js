import cache from '../utils/cache.js'

const { comics } = await cache()

function comicsAPI(req, res) {
    const { comicID } = req.params
    const comic = comics
        .flat()
        .find((element) => element.id === Number(comicID))
    return {
        comics: function () {
            if (comics) {
                return res.status(200).json(comics.flat())
            } else {
                return res.status(404).send('nope')
            }
        },
        comicEndPoints: function () {
            if (comic) {
                return res.status(200).json(comic)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicCharacters: function () {
            if (comic) {
                return res.status(200).json(comic.characters.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicThumbnail: function () {
            if (comic) {
                return res.status(200).json(comic.thumbnail)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicSeries: function () {
            if (comic) {
                return res.status(200).json(comic.series.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicStories: function () {
            if (comic) {
                return res.status(200).json(comic.stories.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicEvents: function () {
            if (comic) {
                return res.status(200).json(comic.events.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        comicCreators: function () {
            if (character) {
                return res.status(200).json(comic.creators.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default comicsAPI
