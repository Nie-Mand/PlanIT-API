import * as services from './services'
import { useState, useEffect } from 'react'


type Board = {
    id: number
    title: string
    tasks: Task[]
}

type Task = {
    id: number
    content: string
    board: number
    isPriority: boolean
}

export const useBoards = () => {

    const [boards, setBoards] = useState<Board[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        services.getBoards().then(res => {
            setBoards(res.boards)
            setLoading(false)
        })
    }
        , [])


    const createBoard = (data) => {
        services.createBoard(data).then(res => {
            setBoards(boards.concat(res.board))
        })
    }

    const createTask = (data) => {
        services.createTask(data).then(res => {
            setBoards(boards.map(board => {
                if (board.id === data.board) {
                    board.tasks.push({ content: data.content, id: res.task, board: data.board, isPriority: false })
                }
                return board
            }))
        })
    }




    return {
        boards,
        createBoard,
        createTask,
        loading
    }


}