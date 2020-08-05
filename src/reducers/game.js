import produce from 'immer';
import { gameActionConst } from '../actions/game-actions';

const initialState = {
    currentGame: {
        embedLink: ''
    }
}

const gameReducer = (state = initialState, action) => produce(state, draft => {
    switch(action.type) {
        case gameActionConst.PLAY_GAME_EMBED: {
            draft.currentGame.embedLink = action.gameData;
            return draft;
        }
        default: return draft;
    }
})

export default gameReducer;
