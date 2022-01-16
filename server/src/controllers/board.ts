import type { RequestHandler } from 'express'
import * as Board from '../services/board'

export const get: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const boards = await Board.get(user)
    return rs.json({
        boards
    })
}

export const create: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const data = rq.body
    const board = await Board.create(data, user)
    return rs.json({
        board
    })
    
}


export const kill: RequestHandler = async (rq, rs) => {
    const user = (rq as any).user
    const id = rq.params.id
    await Board.kill(id, user)
    return rs.status(200).end()
}
