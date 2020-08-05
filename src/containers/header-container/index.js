import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/header';
import { addModalToShow } from '../../actions/modal';
import LoginModal from '../../components/login-modal';


class HeaderContainer extends React.PureComponent {

    handleLoginButtonClick = () => {
        const { addModalToShowAction } = this.props;
        addModalToShowAction(LoginModal, 'login-modal')
    }

    render() {
        return (
            <HeaderComponent
                handleLoginButtonClick={this.handleLoginButtonClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    addModalToShowAction: (component, name) => dispatch(addModalToShow(component, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
