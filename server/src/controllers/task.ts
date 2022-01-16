import type { RequestHandler } from 'express'
import * as Task from '../services/task'

export const getAll: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user

    // TODO: get all tasks from db
    const tasks = await Task.getAll(user)

    return rs.json({
        tasks
    })
}

export const create: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    await Task.create(data, user)
    return rs.status(201).send()
}


export const updateStatus: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    const data = rq.body
    await Task.updateStatus(id, data, user)
    return rs.status(200).send()
}


export const kill: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    await Task.kill(id, user)
    return rs.status(200).send()
}
