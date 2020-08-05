import React from 'react';
import './style.scss';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { removeModalWithName } from '../../actions/modal';
import { userCreateAccount } from '../../actions/user-actions';
import { validateEmail } from '../../util/validate';
import spinnerLoadingImage from '../../static/imgs/spinner-loading.svg';

class LoginModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // isLogin: false,
            email: '',
            password: '',
            emailInvalidate: false,
        }
        this.name = 'login-modal';
    }

    handleEmailOnChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordOnChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleLoginButtonClick = (e) => {
        e.preventDefault();
        const { userCreateAccountAction } = this.props;

        if (validateEmail(this.state.email) === false) {
            this.setState({ emailInvalidate: true });
            return;
        }

        userCreateAccountAction({ email: this.state.email, password: this.state.password });

        // this.setState({ isLogin: true }, () => {
        //     userCreateAccountAction({ email: this.state.email, password: this.state.password });
        // });
    }

    handleModalComponentClick = (e) => {
        if (e.currentTarget === e.target) {
            const { removeModalWithNameAction } = this.props;
            e.currentTarget.classList.add('login-modal-component__hide');
            removeModalWithNameAction(this.name);
        }
    }
   
    render() {
        const {
            userInfo
        } = this.props;
        return (
            <div className="login-modal-component" onClick={this.handleModalComponentClick}>
                <div className="login-modal-component__wrapper">
                    <div className={classNames('login-modal__wrapper', {
                        'form-success': userInfo.isSuccess === true,
                    })}>
                        <div className={classNames('login-modal__container', {
                            'login-modal__container__begin': userInfo.data === null,
                            'login-modal__container__loading': userInfo.isLoading === true,
                            'login-modal__container__success': userInfo.isLoading === false && userInfo.isSuccess === true,
                        })} >
                            <div className="spinner-loading__wrapper">
                                <img src={spinnerLoadingImage} alt="spinner loading" />
                            </div>
                            <h1 className="login-modal__title">Welcome</h1>
                            
                            <form className="form">
                                <input type="text" placeholder="Your email" default={this.state.email} onChange={this.handleEmailOnChange} />
                                <input type="password" placeholder="Password" default={this.state.password} onChange={this.handlePasswordOnChange} />
                                <button type="submit" id="login-button" onClick={this.handleLoginButtonClick}>Login</button>
                            </form>
                        </div>
                        
                        <ul className="bg-bubbles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userReducer.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
    removeModalWithNameAction: (componentName) => dispatch(removeModalWithName(componentName)),
    userCreateAccountAction: (accountData) => dispatch(userCreateAccount(accountData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginModal));
