import type { RequestHandler } from 'express'
import { createToken, verifyToken, hashPassword, verifyPassword } from '../utils/auth'
import { sendEmail } from '../utils/courier'
import * as User from '../services/user'

export const login: RequestHandler = async (rq, rs) => {
    const { email, password } = rq.body

    const validatePassword = await verifyPassword('current pass', password)


    if (!email || !password || !validatePassword)
        return rs.status(401).end()

    // TODO: get user from db

    const user = {
        id: 1,
        email,
        name: 'bruh',
    }

    const token = await createToken(user)

    return rs.json({
        token
    })
}

export const signup: RequestHandler = async (rq, rs) => {
    const { fullname, email, password } = rq.body



    const hashedPassword = await hashPassword(password)
    const user = {
        fullname,
        email,
        password: hashedPassword,
        verified: false,
        avatar: '', //  TODO: get avatar from gravatar
    }


    await User.create(user)
    

    // TODO: add to db


    const token = await createToken({ email: user.email }, '2h')

    // await sendEmail(process.env.COURIER_MAIL_EVENT, user.email, {
    //     name: user.fullname,
    //     callback: `${process.env.BASE_URL}/auth/verify?token=${token}`,
    // })

    return rs.status(201).send()
}

export const verified: RequestHandler = async (rq, rs) => {
    
    const token = rq.query.token as string

    const data = await verifyToken(token)
    if (!data) return rs.status(400).send()


    // TODO: update user verification


    // redirect to login page
    return rs.redirect(`${process.env.APP_URL}/login`)
    
}