export const userActionConst = {
    CREATE_USER_ACCOUNT: '@USER/CREATE_USER_ACCOUNT',
    CREATE_USER_ACCOUNT__FAIL: '@USER/CREATE_USER_ACCOUNT__FAIL',
    CREATE_USER_ACCOUNT__SUCCESS: '@USER/CREATE_USER_ACCOUNT__SUCCESS',
    USER_LOGIN_BY_EMAIL: '@USER/USER_LOGIN_BY_EMAIL',
};

export const userCreateAccount = (accountData) => {
    return {
        type: userActionConst.CREATE_USER_ACCOUNT,
        accountData,
    };
};

export const userCreateAccountFail = (errorMessage) => {
    return {
        type: userActionConst.CREATE_USER_ACCOUNT__FAIL,
        errorMessage,
    };
};

export const userCreateAccountSuccess = (userInfo) => {
    return {
        type: userActionConst.CREATE_USER_ACCOUNT__SUCCESS,
        userInfo
    };
};

export const userLoginByEmail = (accountData) => {
    return {
        type: userActionConst.CREATE_USER_ACCOUNT,
        accountData,
    };
};

