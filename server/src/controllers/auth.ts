import type { RequestHandler } from 'express'
import {
  createToken,
  verifyToken,
  hashPassword,
  verifyPassword,
} from '../utils/auth'
import { sendEmail } from '../utils/courier'
import * as User from '../services/user'

export const login: RequestHandler = async (rq, rs) => {
  const { email, password } = rq.body

  const user = await User.getUserByEmail(email)

  if (!user) return rs.status(400).json({ message: 'User not found' })

  const validatePassword = await verifyPassword(password, user.password)

  // TODO: add error handling
  // if (!validatePassword)
  //   return rs.status(401).json({ message: 'wrong password' })

  if (!user.isVerified)
    return rs.status(401).json({ message: 'User not verified' })

  const payload = {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    avatar: user.avatar,
  }

  const token = createToken(payload)

  return rs.json({
    token,
  })
}

export const signup: RequestHandler = async (rq, rs) => {
  const { firstname, lastname, email, password } = rq.body
  if (!firstname || !lastname || !email || !password)
    return rs.status(400).end()
  const hashedPassword = await hashPassword(password)
  const user = {
    firstname,
    lastname,
    email,
    password: hashedPassword,
  }
  await User.create(user)
  const token = await createToken({ email: user.email }, '2h')
  await sendEmail(process.env.COURIER_MAIL_EVENT, user.email, {
    name: user.firstname,
    callback: `${process.env.BASE_URL}/auth/verify?token=${token}`,
  })
  return rs.status(201).send()
}

export const verified: RequestHandler = async (rq, rs) => {
  const token = rq.query.token as string
  const data = await verifyToken(token)
  if (!data) return rs.status(400).send()
  const { email } = data
  const user = await User.getUserByEmail(email)
  if (!user) return rs.status(400).send()
  await User.verifyUser(user)
  return rs.status(200).send()

  // redirect to login page
  return rs.redirect(`${process.env.APP_URL}/login`)
}
