import {combineReducers} from 'redux';

import user from './user';
import blog from './blog';
import creatingRoutes from './creatingRoutes';
import allRoutes from './allRoutes';
import routes from './routes'
import myRoutes from './myRoutes'

export default combineReducers({
    user: user,
    blog: blog,
    creatingRoutes: creatingRoutes,
    allRoutes: allRoutes,
    routes: routes,
    myRoutes: myRoutes,
});