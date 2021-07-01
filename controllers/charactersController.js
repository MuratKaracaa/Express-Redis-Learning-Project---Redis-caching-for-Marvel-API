import { initialCache } from '../utils/cache.js'
import categories from '../lists/categories.js'

const characters = await initialCache()
categories.push('characters', 'thumbnail')

function charactersAPI(req, res) {
    const { characterID } = req.params
    const character = characters
        .flat()
        .find((element) => element.id === Number(characterID))

    if (characterID) {
        if (character) {
            let category = categories.find((cat) => req.url.includes(cat))

            if (category && character[category] && character[category].items) {
                return res.status(200).json(character[category].items)
            } else if (
                category &&
                character[category] &&
                !character[category].items
            ) {
                return res.status(200).json(character[category])
            } else {
                return res.status(200).json(character)
            }
        } else {
            return res.status(404).send('nope')
        }
    }

    return {
        characters: function () {
            return res.status(200).json(characters)
        },
    }
}

export default charactersAPI
