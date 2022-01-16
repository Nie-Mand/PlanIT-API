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

    useEffect(() => {
        services.getBoards().then(res => {
            setBoards(res)
        })
    }
        , [])


    const createBoard = (data) => {
        services.createBoard(data).then(res => {
            setBoards(boards.concat(res))
        })
    }

    const createTask = (data) => {
        services.createTask(data).then(res => {
            setBoards(boards.map(board => {
                if (board.id === data.board) {
                    board.tasks.push(res)
                }
                return board
            }))
        })
    }




    return {
        boards,
        createBoard,
        createTask
    }


}