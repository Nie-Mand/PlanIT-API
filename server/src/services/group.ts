
import Group from '../models/group'

export const get = (id, user) => {}
export const getAll = () => {}
export const getMine = (user) => {
    return Group.find({
        where: {
            admin: user.id
        }
    })
}

type InputData = {
    name: string,
    description: string,
    avatar?: string,
    isPrivate?: boolean,
    isOpenInvite?: boolean,
}

export const create = (data: InputData, user) => {
    const group = new Group()
    group.name = data.name
    group.description = data.description
    group.avatar = data.avatar ? data.avatar : ''
    group.isPrivate = data.isPrivate ? data.isPrivate : true
    group.isOpenInvite = data.isOpenInvite ? data.isOpenInvite : true
    // group.members = data.members
    // group.invitedMembers = data.invitedMembers
    
    group.admin = user
    // group.members.push(user.id)
    return group.save()
}

export const update = (id, data, user) => {}
export const kill = (id, user) => {}
export const invite = (id, users, user) => {}