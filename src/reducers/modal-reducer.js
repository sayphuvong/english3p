import produce from 'immer';
import { modalActionConst } from '../actions/modal';

const initialState = {
    modalComponents: {}
}

const modalReducer = (state = initialState, action) => produce(state, draft => {
    switch(action.type) {
        case modalActionConst.ADD_MODAL_TO_SHOW: {
            const {
                modalComponentData: {
                    name,
                    component,
                },
            } = action;
            console.debug('modalReducer', {name})
            draft.modalComponents[name] = component;
            return draft;
        }

        case modalActionConst.REMOVE_MODAL_WITH_COMPONENT_NAME: {
            delete draft.modalComponents[action.componentName];
            return draft;
        }
        default: return draft;
    }
})

export default modalReducer;
