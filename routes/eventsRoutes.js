import express from 'express'
import { eventsAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    eventsAPI(req, res).events()
})

router.get('/:eventID', (req, res) => eventsAPI(req, res).eventEndPoints())

router.get('/:eventID/comics', (req, res) => eventsAPI(req, res).eventComics())
router.get('/:eventID/thumbnail', (req, res) =>
    eventsAPI(req, res).eventThumbnail()
)
router.get('/:eventID/series', (req, res) => eventsAPI(req, res).eventSeries())
router.get(
    '/:eventID/characters',
    (req, res) => eventsAPI(req, res).eventCharacters
)
router.get('/:eventID/stories', (req, res) =>
    eventsAPI(req, res).eventStories()
)
router.get('/:eventID/creators', (req, res) =>
    eventsAPI(req, res).eventCreators()
)

export default router
