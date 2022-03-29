import { dataStructure } from "../InsertData/Show/Show"
import { Action } from "./actions"

const initialUser = {
        _id:'',
        name: '',
        email: '',
        role: '',
        date:'',
        __v: 0
}

export const reducerF = (state: dataStructure = initialUser, action: Action) => {
switch(action.type){
    case "ADD": {
        return action.payload
    }
    default:
        return state
}
}