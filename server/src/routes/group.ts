
import { Router } from 'express'
import * as groups from '../controllers/groups'
import { mw, loadMeMw } from '../utils/auth'

const router = Router()

router.post('/', [mw, loadMeMw], groups.create)
router.get('/mine', mw, groups.getMine)
router.get('/:id', mw, groups.get)
router.patch('/:id', mw, groups.update)
router.patch('/:id/invite', mw, groups.invite)


// TODO: remove this
router.delete('/:id', groups.kill)
router.get('/', groups.getAll)

export default router