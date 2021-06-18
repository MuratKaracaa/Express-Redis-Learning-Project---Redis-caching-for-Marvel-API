import cache from '../utils/cache.js'

const { events } = await cache()

function eventsAPI(req, res) {
    const { eventID } = req.params
    const event = events
        .flat()
        .find((element) => element.id === Number(eventID))
    return {
        events: function () {
            if (events) {
                return res.status(200).json(events.flat())
            } else {
                return res.status(404).send('nope')
            }
        },
        eventEndPoints: function () {
            if (event) {
                return res.status(200).json(event)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventComics: function () {
            if (event) {
                return res.status(200).json(event.comics.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventThumbnail: function () {
            if (event) {
                return res.status(200).json(event.thumbnail)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventSeries: function () {
            if (event) {
                return res.status(200).json(event.series.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventStories: function () {
            if (event) {
                return res.status(200).json(event.stories.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventCharacters: function () {
            if (event) {
                return res.status(200).json(event.characters.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        eventCreators: function () {
            if (event) {
                return res.status(200).json(event.creators.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default eventsAPI
