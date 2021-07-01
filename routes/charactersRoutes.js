import express from 'express'
import { charactersAPI } from '../controllers/index.js'
const router = express.Router()

router.get('/', (req, res) => {
    charactersAPI(req, res)
})

router.get('/:characterID', (req, res) => charactersAPI(req, res))

router.get('/:characterID/comics', (req, res) => charactersAPI(req, res))
router.get('/:characterID/thumbnail', (req, res) => charactersAPI(req, res))
router.get('/:characterID/series', (req, res) => charactersAPI(req, res))
router.get('/:characterID/events', (req, res) => charactersAPI(req, res))
router.get('/:characterID/stories', (req, res) => charactersAPI(req, res))
router.get('/:characterID/creators', (req, res) => charactersAPI(req, res))

export default router
