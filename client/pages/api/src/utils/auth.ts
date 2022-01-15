import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

export const createToken = (payload: any, expiresAt?: string) =>
  jwt.sign(payload, process.env.JWT_SECRET || 'shhhhh', {
    expiresIn: expiresAt || '10h',
  })

export const verifyToken = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET || 'hey')

export const hashPassword = (password: string) =>
  bcrypt.hash(password, Number(process.env.SALT || '69'))

export const verifyPassword = (password: string, hashed: string) =>
  bcrypt.compare(password, hashed)

export const mw = async (rq: any, rs: any, next: any) => {
  const token = rq.headers.authorization
  if (!token) return rs.status(401).end()
  const payload = await verifyToken(token)
  if (!payload) return rs.status(401).end()
  rq.user = payload
  next()
}
