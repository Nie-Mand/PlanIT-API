const task = {
    content: '',
    belongsToBoard: '',
    belongsToUser: '',
    state: 'to-do' || 'in-progress' || 'done' || 'on-hold',
    isPriority: false,
}

import Task from '../models/task'
import * as Board from './board'


export const getAll = (user) => {
    return Task.find()
        
}

type InputTask = {
    content: string
    board: string
    isPriority?: boolean
}

export const create = async (data: InputTask, user) => {
    const board = await Board.getOne(data.board, user)
    if (!board) 
        throw new Error('Board not found OR you are not the owner of the board')

        const task = new Task()
    task.content = data.content
    task.board = board
    task.isPriority = data.isPriority ? data.isPriority : false
    
    await task.save()

    board.addTask(task)
    
    await board.save()


    return task.id

}

export const updateStatus = async (id, data, user) => {

    const task = await Task.findOne({
        where: {
            id,
        },
        join: {
            alias: 'task',
            leftJoinAndSelect: {
                board: 'task.board'
            }
        }
    })
    if (!task) throw new Error('Task not found')


    const board = await Board.getOne(task.board.id, user)
    if (!board) 
        throw new Error('Board not found OR you are not the owner of the board')

    
    const newBoard = await Board.getOne(data.board, user)
    

    if (!newBoard)
        throw new Error('Board not found OR you are not the owner of the board')    
    
    task.board = data.board
    board.tasks = board.tasks.filter(t => t.id !== id)
    newBoard.addTask(task)

    await task.save()
    await board.save()
    await newBoard.save()


    return task
}

export const kill = async (id, user) => {
    const task = await Task.findOne({
        where: {
            id,
        },
    })
    if (task) await Task.remove(task)
}
