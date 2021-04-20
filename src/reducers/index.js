import {combineReducers} from 'redux';

import user from './user';
import blog from './blog';
import myRouters from './myRouters';
import routers from './routers'

export default combineReducers({
    user: user,
    blog: blog,
    myRouters: myRouters,
    routers: routers,
});