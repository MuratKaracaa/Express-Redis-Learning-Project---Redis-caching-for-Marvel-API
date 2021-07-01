import express from 'express'
import { storiesAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    storiesAPI(req, res).stories()
})

router.get('/:storyID', (req, res) => storiesAPI(req, res))

router.get('/:storyID/comics', (req, res) => storiesAPI(req, res))
router.get('/:storyID/thumbnail', (req, res) => storiesAPI(req, res))
router.get('/:storyID/series', (req, res) => storiesAPI(req, res))
router.get('/:storyID/events', (req, res) => storiesAPI(req, res))
router.get('/:storyID/characters', (req, res) => storiesAPI(req, res))
router.get('/:storyID/creators', (req, res) => storiesAPI(req, res))

export default router
