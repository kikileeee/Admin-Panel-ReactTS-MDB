import { dataStructure } from "../InsertData/Show/Show"

export type Action = { type: 'ADD', payload: dataStructure }

export const addUser = (user: dataStructure): Action => ({
    type: 'ADD',
    payload: user,
})