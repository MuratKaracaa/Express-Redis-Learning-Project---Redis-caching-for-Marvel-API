import cache from '../utils/cache.js'

const { stories } = await cache()

function storiesAPI(req, res) {
    const { storyID } = req.params
    const story = stories
        .flat()
        .find((element) => element.id === Number(storyID))
    return {
        stories: function () {
            if (stories) {
                return res.status(200).json(stories.flat())
            } else {
                return res.status(404).send('nope')
            }
        },
        storyEndPoints: function () {
            if (story) {
                return res.status(200).json(story)
            } else {
                return res.status(404).send('nope')
            }
        },
        storyCharacters: function () {
            if (story) {
                return res.status(200).json(story.characters.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        storyThumbnail: function () {
            if (story) {
                return res.status(200).json(story.thumbnail)
            } else {
                return res.status(404).send('nope')
            }
        },
        storyComics: function () {
            if (story) {
                return res.status(200).json(story.comics.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        storySeries: function () {
            if (story) {
                return res.status(200).json(story.series.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        storyEvents: function () {
            if (story) {
                return res.status(200).json(story.events.items)
            } else {
                return res.status(404).send('nope')
            }
        },
        storyCreators: function () {
            if (character) {
                return res.status(200).json(story.creators.items)
            } else {
                return res.status(404).send('nope')
            }
        },
    }
}

export default storiesAPI
