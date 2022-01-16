
import { Router } from 'express'
import * as board from '../controllers/board'
import { mw, loadMeMw } from '../utils/auth'

const router = Router()

router.post('/', [mw, loadMeMw], board.create)
router.get('/', [mw, loadMeMw], board.get)
router.delete('/:id', [mw, loadMeMw], board.kill)

export default router