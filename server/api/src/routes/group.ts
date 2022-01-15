
import { Router } from 'express'
import * as groups from '../controllers/groups'
import { mw } from '../utils/auth'

const router = Router()

router.post('/', mw, groups.create)
router.get('/', mw, groups.getAll)
router.get('/mine', mw, groups.getMine)
router.get('/:id', mw, groups.get)
router.patch('/:id', mw, groups.update)
router.delete('/:id', mw, groups.kill)
router.post('/:id/invite', mw, groups.invite)

export default router