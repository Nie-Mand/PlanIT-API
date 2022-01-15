const task = {
    content: '',
    belongsToBoard: '',
    belongsToUser: '',
    state: 'to-do' || 'in-progress' || 'done' || 'on-hold',
    isPriority: false,
}



export const getAll = (user) => {

    return [
        'task1',
        'task2',
        'task3',
    ]
}

export const create = (data, user) => {
    
}

export const updateStatus = (id, data, user) => {
        
}
