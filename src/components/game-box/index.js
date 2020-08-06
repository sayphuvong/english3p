import React from 'react';
import './style.scss';
import { Link, withRouter } from 'react-router-dom';
import { playGameEmbed } from '../../actions/game-actions';
import { connect } from 'react-redux';

class GameBox extends React.PureComponent {
    handleGameBoxClick = () => {
        const { playGameEmbedAction, embedLink } = this.props;
        playGameEmbedAction(embedLink);
    }
    
    render() {
        const { thumbnail } = this.props;
        return (
            <Link to="/english3p/game-page" onClick={this.handleGameBoxClick}>
                <div className="game-box__wrap">
                    <img src={thumbnail} alt="" />
                </div>
            </Link>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    playGameEmbedAction: (embedLink) => dispatch(playGameEmbed(embedLink)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameBox));
