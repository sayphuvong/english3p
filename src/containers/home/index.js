import React from 'react';
import HeaderContainer from '../../containers/header-container';
import { Route, Switch, withRouter } from "react-router-dom";
import GamePage from '../../containers/game-page';
import EnglishCardPage from '../../containers/english-card-page';
import VideoStudyPage from '../../containers/studying-video-page';
import CategoryList from './category-list';
import WordRandomButton from '../../components/word-random-button';
import ModalContainer from '../../containers/modal-container';
import { connect } from 'react-redux';
import RequireAuthentication from '../../HOCs/requireAuthentication';
import { userCreateAccountSuccess } from '../../actions/user-actions';

// https://technext.github.io/kiddy/index.html
// https://www.gamestolearnenglish.com

class Home extends React.PureComponent {
    render() {
        return (
            <>
                <HeaderContainer />
                <Switch>
                    <Route exact={true} path="/" >
                        <WordRandomButton />
                        <CategoryList />
                    </Route>
                    <Route path="/game-page" component={GamePage} />
                    <Route path="/english-card/:topic" component={EnglishCardPage} />
                    <Route path="/video-study/:topic" component={VideoStudyPage} />
                </Switch>
                <ModalContainer />
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userCreateAccountSuccessAction: (userInfo) => dispatch(userCreateAccountSuccess(userInfo))
});

export default connect(null, mapDispatchToProps)(withRouter(RequireAuthentication(Home)));
