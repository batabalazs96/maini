import { all } from 'redux-saga/effects';
import { mainSagas } from './mainSagas';

function* sagas() {
    yield all([
        mainSagas(),
    ]);
};

export default sagas;