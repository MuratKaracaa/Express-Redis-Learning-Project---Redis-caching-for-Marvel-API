import express from 'express'
import characterAPI from '../controllers/characterControllers.js'
const router = express.Router()

router.get('/:characterID', (req, res) =>
    characterAPI(req, res).characterEndPoints()
)

router.get('/:characterID/comics', (req, res) =>
    characterAPI(req, res).characterComics()
)
router.get('/:characterID/thumbnail', (req, res) =>
    characterAPI(req, res).characterThumbnail()
)
router.get('/:characterID/series', (req, res) =>
    characterAPI(req, res).characterSeries()
)
router.get('/:characterID/events', (req, res) =>
    characterAPI(req, res).characterStories()
)
router.get('/:characterID/stories', (req, res) =>
    characterAPI(req, res).characterEvents()
)

export default router
