import { Router } from 'express'
import * as auth from '../controllers/auth'

const router = Router()

router.post('/login', auth.login)
router.post('/signup', auth.signup)
router.get('/verify', auth.verified)


export default router