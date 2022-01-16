import { Router } from 'express'
import * as tasks from '../controllers/task'
import { mw, loadMeMw  } from '../utils/auth'

const router = Router()

router.post('/', [mw, loadMeMw], tasks.create)
router.patch('/:id', [mw, loadMeMw], tasks.updateStatus)
router.delete('/:id', [mw, loadMeMw], tasks.kill)

export default router