import express from 'express'
import { eventsAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    eventsAPI(req, res).events()
})

router.get('/:eventID', (req, res) => eventsAPI(req, res))

router.get('/:eventID/comics', (req, res) => eventsAPI(req, res))
router.get('/:eventID/thumbnail', (req, res) => eventsAPI(req, res))
router.get('/:eventID/series', (req, res) => eventsAPI(req, res))
router.get('/:eventID/characters', (req, res) => eventsAPI(req, res))
router.get('/:eventID/stories', (req, res) => eventsAPI(req, res))
router.get('/:eventID/creators', (req, res) => eventsAPI(req, res))

export default router
