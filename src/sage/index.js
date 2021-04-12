import {all} from 'redux-saga/effects'

import {watchUser} from './sageUser'

export function* rootWatcher() {
    yield all([watchUser()])
}