import {createStore} from 'redux'
import { reducerF } from './reducers'

export const store = createStore(reducerF)