import { combineReducers } from 'redux'

import posts from './posts'
import menu from './menu'

export default combineReducers({
    posts,
    menu
})