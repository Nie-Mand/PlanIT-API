import User from '../models/user'
import { avatar } from '../utils/avatar'


type EntryData = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}
export const create = (data: EntryData) => {
    const user = new User()
    user.firstname = data.firstname
    user.lastname = data.lastname
    user.email = data.email
    user.password = data.password
    user.isVerified = false
    user.avatar = avatar(`${data.firstname}-${data.lastname}`)
    // user.groupsHeJoined = data.groupsHeJoined
    // user.groupsHeCreated = data.groupsHeCreated
    return user.save()
}

export const getUserByEmail = (email: string) => {
    return User.findOne({ where: { email } })
}

export const verifyUser = (user: User) => {
    user.isVerified = true
    return user.save()
}


export const getMe = (user) => {
    return User.findOne({ where: { id: user.id } })
}

export const update = (user, data) => {
    // TODO: update user
}