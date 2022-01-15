import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

export const login = async (data: { email, password }) => {
    const response = await api.post('/auth/login', data)
    return response.data
}

export const signup = async (data: { name, email, password }) => {
    const response = await api.post('/auth/signup', data)
    return response.data
}

