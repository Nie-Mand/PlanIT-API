import type { RequestHandler } from 'express'
import * as User from '../services/user'

export const getMe: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user

    const me = await User.getMe(user)

    return rs.json({
        me
    })
}


export const update: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    await User.update(user, data)
    return rs.status(200).send()
}
