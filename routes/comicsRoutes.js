import express from 'express'
import { comicsAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    comicsAPI(req, res).comics()
})

router.get('/:comicID', (req, res) => comicsAPI(req, res).comicEndPoints())

router.get('/:comicID/characters', (req, res) =>
    comicsAPI(req, res).comicCharacters()
)
router.get('/:comicID/thumbnail', (req, res) =>
    comicsAPI(req, res).comicThumbnail()
)
router.get('/:comicID/series', (req, res) => comicsAPI(req, res).comicSeries())
router.get('/:comicID/events', (req, res) => comicsAPI(req, res).comicEvents())
router.get('/:comicID/stories', (req, res) =>
    comicsAPI(req, res).comicStories()
)
router.get('/:comicID/creators', (req, res) =>
    comicsAPI(req, res).comicCreators()
)

export default router
