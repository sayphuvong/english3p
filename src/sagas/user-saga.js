import { all, takeLatest, race, call, delay, put, take, dispatch, fork, takeEvery } from 'redux-saga/effects';
import {
    userActionConst,
    userCreateAccountFail,
    userCreateAccountSuccess,
} from '../actions/user-actions';
import axios from 'axios';
import { apiBaseUrl } from '../configs';

function requestCreatingAccount(accountData) {
    return axios({
        method: 'POST',
        url: `${apiBaseUrl}/user/create-account`,
        data: {
            username: accountData.username,
            email: accountData.email,
            password: accountData.password
        }
    });
}

function* createUserAccountSaga (action) {
    try {
        const {
            res, isTimeout
        } = yield race({
            res: call(requestCreatingAccount, action.accountData),
            isTimeout: delay(3000),
        });

        if (isTimeout) {
            yield put(userCreateAccountFail({ errorType: `timeout`, message: `status => timeout ${3000}s`}));
            return;
        }
    
        if (res && res.status !== 200 && res.status !== 201) {
            yield put(userCreateAccountFail({ errorType: `status !== [200, 201]`, message: `status => ${res.status}`}));
            return;
        }

        if (res.data.userToken) {
            localStorage.setItem('user_token', res.data.userToken);
        } else {
            localStorage.setItem('user_token', '');
        }

        yield put(userCreateAccountSuccess(res.data));
    } catch (err) {
        yield put(userCreateAccountFail({ errorType: `another error`, message: err}));
    }
}

export default function * saga () {
    yield all ([
        takeLatest(userActionConst.CREATE_USER_ACCOUNT, createUserAccountSaga),
    ]);
}
