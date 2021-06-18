import express from 'express'
import { seriesAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    seriesAPI(req, res).series()
})

router.get('/:serieID', (req, res) => seriesAPI(req, res).serieEndPoints())

router.get('/:serieID/comics', (req, res) => seriesAPI(req, res).serieComics())
router.get('/:serieID/thumbnail', (req, res) =>
    seriesAPI(req, res).serieThumbnail()
)
router.get('/:serieID/characters', (req, res) =>
    seriesAPI(req, res).serieCharacters()
)
router.get('/:serieID/events', (req, res) => seriesAPI(req, res).serieEvents())
router.get('/:serieID/stories', (req, res) =>
    seriesAPI(req, res).serieStories()
)
router.get('/:serieID/creators', (req, res) =>
    seriesAPI(req, res).serieCreators()
)

export default router
