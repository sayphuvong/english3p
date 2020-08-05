import React from 'react';
import { connect } from 'react-redux';


class ModalContainer extends React.PureComponent {

    render() {
        const { modalComponents } = this.props;
        return (
            <>
                <div className="modal-area__component">
                    {modalComponents && Object.entries(modalComponents).map(([key, ModalComponent]) => {
                        return (
                            <div key={key} component-name={key}>
                                {<ModalComponent />}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    modalComponents: state.modalReducer.modalComponents,
});

export default connect(mapStateToProps, null)(ModalContainer);
