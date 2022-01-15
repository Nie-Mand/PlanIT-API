import { Router } from 'express'
import * as tasks from '../controllers/task'
import { mw } from '../utils/auth'

const router = Router()

router.get('/', mw, tasks.getAll)
router.post('/', mw, tasks.create)
router.patch('/:id', mw, tasks.updateStatus)

export default router