import express from 'express'
import { charactersAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    charactersAPI(req, res).characters()
})

router.get('/:characterID', (req, res) =>
    charactersAPI(req, res).characterEndPoints()
)

router.get('/:characterID/comics', (req, res) =>
    charactersAPI(req, res).characterComics()
)
router.get('/:characterID/thumbnail', (req, res) =>
    charactersAPI(req, res).characterThumbnail()
)
router.get('/:characterID/series', (req, res) =>
    charactersAPI(req, res).characterSeries()
)
router.get('/:characterID/events', (req, res) =>
    charactersAPI(req, res).characterEvents()
)
router.get('/:characterID/stories', (req, res) =>
    charactersAPI(req, res).characterStories()
)
router.get('/:characterID/creators', (req, res) =>
    charactersAPI(req, res).characterCreators()
)

export default router
