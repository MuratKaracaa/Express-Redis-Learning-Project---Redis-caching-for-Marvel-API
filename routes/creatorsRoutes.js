import express from 'express'
import { creatorsAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    creatorsAPI(req, res).creators()
})

router.get('/:creatorID', (req, res) =>
    creatorsAPI(req, res).creatorEndPoints()
)

router.get('/:creatorID/comics', (req, res) =>
    creatorsAPI(req, res).creatorComics()
)
router.get('/:creatorID/series', (req, res) =>
    creatorsAPI(req, res).creatorSeries()
)
router.get('/:creatorID/events', (req, res) =>
    creatorsAPI(req, res).creatorEvents()
)
router.get('/:creatorID/stories', (req, res) =>
    creatorsAPI(req, res).creatorStories()
)

export default router
