import { Router } from 'express'
import auth from './auth'
import task from './task'
import user from './user'
import group from './group'
import board from './board'

const router = Router()

router.use('/auth', auth)
router.use('/task', task)
router.use('/user', user)
router.use('/group', group)
router.use('/board', board)

export default router