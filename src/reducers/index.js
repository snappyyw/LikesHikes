import {combineReducers} from 'redux'

import user from './user'
import blog from './blog'

export default combineReducers({
    user: user,
    blog: blog,
});