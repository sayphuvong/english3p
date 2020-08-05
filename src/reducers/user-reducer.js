import produce from 'immer';
import { userActionConst } from '../actions/user-actions';

const initialState = {
    userInfo: {
        data: null,
        isLoading: false,
        isSuccess: false,
    }
}

const userReducer = (state = initialState, action) => produce(state, draft => {
    switch(action.type) {
        case userActionConst.CREATE_USER_ACCOUNT__SUCCESS: {
            draft.userInfo.data = action.userInfo;
            draft.userInfo.isSuccess = true;
            draft.userInfo.isLoading = false;

            return draft;
        }

        case userActionConst.CREATE_USER_ACCOUNT: {
            draft.userInfo.data = null;
            draft.userInfo.isSuccess = null;
            draft.userInfo.isLoading = true;

            return draft;
        }

        case userActionConst.CREATE_USER_ACCOUNT__FAIL: {
            draft.userInfo.data = action.errorMessage;
            draft.userInfo.isSuccess = false;
            draft.userInfo.isLoading = false;

            return draft;
        }

        default: return draft;
    }
});

export default userReducer;
