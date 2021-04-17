import {all} from 'redux-saga/effects';

import {watchUser} from './sageUser';
import {watchBlog} from './sageBlog';

export function* rootWatcher() {
    yield all([watchUser(), watchBlog()]);
}