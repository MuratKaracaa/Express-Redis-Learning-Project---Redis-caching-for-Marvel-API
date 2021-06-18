import cache from '../utils/cache.js'

const { series } = await cache()

function seriesAPI(req, res) {
    const { serieID } = req.params
    const serie = series
        .flat()
        .find((element) => element.id === Number(serieID))
    return {
        series: function () {
            if (series) {
                return res.status(200).json(series.flat())
            } else {
                return res.status(404).send('nope')
            }
        },
        serieEndPoints: function () {
            if (serie) {
                return res.status(200).json(serie)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieCharacters: function () {
            if (serie) {
                return res.status(200).json(serie.characters.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieThumbnail: function () {
            if (serie) {
                return res.status(200).json(serie.thumbnail)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieComics: function () {
            if (serie) {
                return res.status(200).json(serie.comics.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieStories: function () {
            if (serie) {
                return res.status(200).json(serie.stories.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieEvents: function () {
            if (serie) {
                return res.status(200).json(serie.events.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        serieCreators: function () {
            if (character) {
                return res.status(200).json(serie.creators.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default seriesAPI
