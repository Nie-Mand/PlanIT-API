import type { RequestHandler } from 'express'
import * as Group from '../services/group'

export const get: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    const group = await Group.get(id, user)
    return rs.json({
        group
    })
}

export const getAll: RequestHandler = async (rq, rs) => {
    const groups = await Group.getAll()
    return rs.json({
        groups
    })
}

export const getMine: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const groups = await Group.getMine(user)
    return rs.json({
        groups
    })
}

export const invite: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    const users = rq.body.users
    await Group.invite(id, users, user)
    // TODO: send notification to users
    return rs.status(200).end()
}

export const create: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    await Group.create(data, user)
    return rs.status(200).end()
}


export const update: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    const id = rq.params.id
    await Group.update(id, data, user)
    return rs.status(200).send()
}


export const kill: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    await Group.kill(id, user)
    return rs.status(200).send()
}
