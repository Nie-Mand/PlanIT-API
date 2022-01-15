import { Router } from 'express'
import * as users from '../controllers/user'
import { mw } from '../utils/auth'

const router = Router()

router.get('/', mw, users.getMe)
router.patch('/', mw, users.update)

export default router