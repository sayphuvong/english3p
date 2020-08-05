export const modalActionConst = {
    ADD_MODAL_TO_SHOW: '@MODAL/ADD_MODAL_TO_SHOW',
    REMOVE_MODAL_WITH_COMPONENT_NAME: '@MODAL/REMOVE_MODAL_WITH_COMPONENT_NAME',
};

export const addModalToShow = (component, name) => {
    return {
        type: modalActionConst.ADD_MODAL_TO_SHOW,
        modalComponentData: {
            component,
            name,
        },
    };
}

export const removeModalWithName = (componentName) => {
    return {
        type: modalActionConst.REMOVE_MODAL_WITH_COMPONENT_NAME,
        componentName,
    };
}