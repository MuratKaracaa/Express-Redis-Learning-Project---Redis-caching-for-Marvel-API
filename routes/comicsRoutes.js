import express from 'express'
import { comicsAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    comicsAPI(req, res)
})

router.get('/:comicID', (req, res) => comicsAPI(req, res))

router.get('/:comicID/characters', (req, res) => comicsAPI(req, res))
router.get('/:comicID/thumbnail', (req, res) => comicsAPI(req, res))
router.get('/:comicID/series', (req, res) => comicsAPI(req, res))
router.get('/:comicID/events', (req, res) => comicsAPI(req, res))
router.get('/:comicID/stories', (req, res) => comicsAPI(req, res))
router.get('/:comicID/creators', (req, res) => comicsAPI(req, res))

export default router
