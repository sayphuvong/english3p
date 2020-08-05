import React from 'react';
import './style.scss';
import SiteLogoImg from '../../static/imgs/site-logo.png';
// import WordRandomButton from '../../components/word-random-button';
import FacebookIcon from '../../static/imgs/icons/facebook_icon.png';
import TwitterIcon from '../../static/imgs/icons/twitter_icon.png';
import LinkedInIcon from '../../static/imgs/icons/linkedin_icon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.PureComponent {

    render() {
        const {
            handleLoginButtonClick,
            userInfo,
        } = this.props;
        return (
            <header>
                <div className="container">
                    <div className="wrap">
                        <div className="site-logo">
                            <img src={SiteLogoImg} alt="site logo"/>
                        </div>
                        {/* <div className="user-container">
                            <div className="user-container-content">
                                {userInfo && userInfo.data && userInfo.isSuccess === true && (
                                    <div className="user-container__user-info">
                                        <span className="text noselect">{userInfo.data.email}</span>
                                    </div>
                                )}
                                {userInfo && userInfo.data === null && userInfo.isSuccess === false && (
                                    <div className="user-container__login-btn" onClick={handleLoginButtonClick}>
                                        <span className="text noselect">Log in</span>
                                    </div>
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="contact-container">
                    <div className="contact-wrap">
                        <nav className="contact-nav">
                            <ul className="contact-nav__menu">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Study Card</Link></li>
                                <li><Link to="/mini-game">Mini Game</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="top-social">
                            <a href="https://www.facebook.com/" target="_blank">    
                                <span className="top-social__icon">
                                    <img src={FacebookIcon} alt="facebook icon" />
                                </span>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <span className="top-social__icon">
                                    <img src={TwitterIcon} alt="twitter icon" />
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <span className="top-social__icon">
                                    <img src={LinkedInIcon} alt="linked-in icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <WordRandomButton /> */}
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userReducer.userInfo,
});

export default connect(mapStateToProps, null)(Header);