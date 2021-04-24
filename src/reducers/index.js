import {combineReducers} from 'redux';

import user from './user';
import blog from './blog';
import myRoutes from './myRoutes';
import allRoutes from './allRoutes';
import routes from './routes'

export default combineReducers({
    user: user,
    blog: blog,
    myRoutes: myRoutes,
    allRoutes: allRoutes,
    routes: routes,
});