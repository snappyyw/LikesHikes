import {all} from 'redux-saga/effects';

import {watchUser} from './sageUser';
import {watchBlog} from './sageBlog';
import {watchRoute} from './sageRoutes'

export function* rootWatcher() {
    yield all([
        watchUser(),
        watchBlog(), 
        watchRoute()
    ]);
}