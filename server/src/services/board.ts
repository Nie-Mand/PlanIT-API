import Board from '../models/board'

export const getOne = async (id, user) => {
    const board = await Board.findOne({
        where: {
            id,
            user: user.id
        },
        join: {
          alias: 'board',
          leftJoinAndSelect: {
            tasks: 'board.tasks'
          }
        }
    })
    return board
}

export const get = user => {
  return Board.find({
    where: {
      user
    },
    join: {
      alias: 'board',
      leftJoinAndSelect: {
        tasks: 'board.tasks'
      }
    }
  })
}

type InputBoard = {
  title: string
}
export const create = async (data: InputBoard, user) => {
  const board = new Board()
  board.title = data.title
  board.user = user
  board.tasks = []
  await board.save()
}


export const kill = async (id, user) => {
  const board = await Board.findOne({
    where: {
      id,
      user: user.id,
    },
  })
  if (board) await Board.remove(board)
}
