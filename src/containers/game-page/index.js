import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GamePage extends React.PureComponent {
    render() {
        const { gameEmbedLink } = this.props;
        return (
            <div className="game-page__component">
                <div className="game-page__wrap">
                    <div className="game-page__content">
                    <iframe
                        title="Games To Learn English"
                        src={gameEmbedLink}
                        scrolling="no"
                    ></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    gameEmbedLink: state.gameReducer.currentGame.embedLink
});


export default connect(mapStateToProps, null)(withRouter(GamePage));
