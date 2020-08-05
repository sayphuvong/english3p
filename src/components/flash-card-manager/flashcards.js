import React from 'react';
import FlashcardItem from './flashcard-item';

const NavButtons = (props) => {
    const leftStyle = props.cardIndex - 1 < 0 ? { opacity: 0.5 } : {};
    const rightStyle = props.cardIndex + 1 >= props.cardLength ? { opacity: 0.5 } : {};
    return (
        <div className="nav-buttons-wrapper">
            <div className="nav-arrow-btn" style={leftStyle} onClick={() => props.arrowHandler(true)}>&larr;</div>
            {`${props.cardIndex + 1}/${props.cardLength}`}
            <div className="nav-arrow-btn" style={rightStyle} onClick={() => props.arrowHandler(false)}>&rarr;</div>
        </div>
    )
};

class Flashcards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardIndex: 0
        }
    }

    componentDidMount = () => {
        const { getCurrentIndex } = this.props;
        getCurrentIndex(this.state.cardIndex);
    }

    arrowHandler = (left) => {
        const { cardIndex } = this.state;
        const { cards, getCurrentIndex } = this.props;
        if (left) {
            if (cardIndex - 1 >= 0) {
                this.setState({ cardIndex: cardIndex - 1 }, () => {
                    getCurrentIndex(this.state.cardIndex);
                });
            }
        } else {
            if (cardIndex + 1 < this.props.cards.length) {
                this.setState({ cardIndex: cardIndex + 1 }, () => {
                    getCurrentIndex(this.state.cardIndex);
                });
            }
        }
    }

    render() {
        return (
            <div className="flashcard-viewer noselect">
                <div className="flashcard-item-wrapper">
                    <FlashcardItem
                        cardIndex={this.state.cardIndex}
                        card={this.props.cards[this.state.cardIndex]} />
                </div>
                <div>
                    <NavButtons
                        arrowHandler={this.arrowHandler}
                        cardIndex={this.state.cardIndex}
                        cardLength={this.props.cards.length} />
                </div>
            </div>
        );
    }
}

export default Flashcards;
