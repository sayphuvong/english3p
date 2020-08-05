import { combineReducers } from "redux";
import gameReducer from './game';
import modalReducer from './modal-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
    // Put reducers here!
    gameReducer,
    modalReducer,
    userReducer,
});

export default rootReducer;
