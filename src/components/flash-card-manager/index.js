import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
import { playGameEmbed } from '../../actions/game-actions';
import { connect } from 'react-redux';
import Flashcards from './flashcards';

class FlashCardManager extends React.PureComponent {
    render() {
        const { getCurrentIndex, cards } = this.props;
        return (
            <Flashcards cards={cards} getCurrentIndex={getCurrentIndex} />
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    playGameEmbedAction: (embedLink) => dispatch(playGameEmbed(embedLink)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FlashCardManager));
