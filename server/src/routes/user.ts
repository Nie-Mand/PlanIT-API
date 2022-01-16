import { Router } from 'express'
import * as users from '../controllers/user'
import { mw } from '../utils/auth'

const router = Router()

router.get('/', mw, users.getMe)
router.patch('/', mw, users.update)


// TODO: remove this
router.get('/all', users.getAll)
router.delete('/:id', users.kill)


export default router