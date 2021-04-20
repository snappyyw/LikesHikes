import {all} from 'redux-saga/effects';

import {watchUser} from './sageUser';
import {watchBlog} from './sageBlog';
import {watchRouter} from './sageRouters'

export function* rootWatcher() {
    yield all([watchUser(), watchBlog(), watchRouter()]);
}