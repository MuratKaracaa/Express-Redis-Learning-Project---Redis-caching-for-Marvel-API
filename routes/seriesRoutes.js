import express from 'express'
import { seriesAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    seriesAPI(req, res).series()
})

router.get('/:serieID', (req, res) => seriesAPI(req, res))

router.get('/:serieID/comics', (req, res) => seriesAPI(req, res))
router.get('/:serieID/thumbnail', (req, res) => seriesAPI(req, res))
router.get('/:serieID/characters', (req, res) => seriesAPI(req, res))
router.get('/:serieID/events', (req, res) => seriesAPI(req, res))
router.get('/:serieID/stories', (req, res) => seriesAPI(req, res))
router.get('/:serieID/creators', (req, res) => seriesAPI(req, res))

export default router
