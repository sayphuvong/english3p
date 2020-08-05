import React from 'react';

class FlashcardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false,
            flipStyle: { transition: 'transform 0.5s' }
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.cardIndex !== this.props.cardIndex) {
            this.setState({
                flipped: false,
                flipStyle: {}
            });
        }
    }
    clickHandler = () => {
        this.setState({
            flipped: !this.state.flipped,
            flipStyle: { transition: 'transform 0.5s' }
        });
    }
    render() {
        const rotation = this.state.flipped ? 180 : 0;
        const frontStyle = { ...this.state.flipStyle, transform: `rotateY(${rotation}deg)` }
        const backStyle = { ...this.state.flipStyle, transform: `rotateY(${180 + rotation}deg)` }
        return (
            <div className="flashcard-item" onClick={() => this.clickHandler()}>
                <div className="flashcard-item-inner" style={frontStyle}>
                    <div className="flashcard-item-helper">front</div>
                    <span>{this.props.card.front}</span>
                </div>
                <div className="flashcard-item-inner" style={backStyle}>
                    <div className="flashcard-item-helper">back</div>
                    <span>{this.props.card.back}</span>
                </div>
            </div>
        );
    }
}

export default FlashcardItem;
