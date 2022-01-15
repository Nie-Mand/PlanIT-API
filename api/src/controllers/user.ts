import type { RequestHandler } from 'express'
import * as User from '../services/user'

export const getMe: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user

    const me = await User.getMe(user)

    if (!me)
        return rs.status(404).end()

    const data = {
        id: me.id,
        firstname: me.firstname,
        lastname: me.lastname,
        email: me.email,
        isVerified: me.isVerified,
        avatar: me.avatar,
    }

    return rs.json({
        data
    })
}


export const update: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    await User.update(user, data)
    return rs.status(200).send()
}
