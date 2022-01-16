import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const login = async (data: { email, password }) => {
    try {
        const response = await api.post('/auth/login', data)
        return response.data
    } catch (e: any) {
        throw new Error(e.response.data.message);
    }
}

export const signup = async (data: { name, email, password }) => {
    const response = await api.post('/auth/signup', data)
    return response.data
}

export const getMe = async () => {
    const response = await api.get('/user', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}


export const getBoards = async () => {
    const response = await api.get('/board', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export const createBoard = async (data: { title }) => {
    const response = await api.post('/board', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export const createTask = async (data: { board, content, isPriority }) => {
    const response = await api.post('/task', data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}

export const updateTask = async (id: number, data: { board }) => {
    const response = await api.patch(`/task/${id}`, data, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}
