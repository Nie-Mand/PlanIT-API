import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

export const createToken = (payload: any, expiresAt?: string) =>
  jwt.sign(payload, process.env.JWT_SECRET || 'shhhhh', {
    expiresIn: expiresAt || '10h',
  })

export const verifyToken = (token: string) => jwt.verify(token, process.env.JWT_SECRET || 'hey')

export const hashPassword = (password: string) =>
  bcrypt.hash(password, Number(process.env.SALT || '69'))

export const verifyPassword = (password: string, hashed: string) =>
  bcrypt.compare(password, hashed)
