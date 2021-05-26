import cache from '../utils/cache.js'

const cachedData = await cache()

const characterEndPoints = (req, res) => {
    const { characterID } = req.params
    const character = cachedData.find(
        (element) => element.id === Number(characterID)
    )
    if (character) {
        res.status(200).json(character)
    } else {
        res.status(404).send('nope')
    }
}

export { characterEndPoints }
