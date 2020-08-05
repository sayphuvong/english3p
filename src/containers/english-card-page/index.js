import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FlashcardManager from '../../components/flash-card-manager';
import { flashCard } from '../../constants/flash-card';

class EnglishCardPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            cards: {
                family: flashCard.family,
                animal: flashCard.animal,
                travel: flashCard.travel
            },
            exampleList: [],
            currentTopic: null,
        }
    }

    componentDidMount = () => {
        const { topic} = this.props.match.params;
        if (topic) {
            this.setState({ currentTopic: this.state.cards[topic]});
        }
    }

    getCurrentIndex = (currentIndex) => {
        this.setState({ exampleList: this.state.currentTopic[currentIndex].exampleList });
    }

    render() {
        const { topic} = this.props.match.params;
        console.debug('this.state.currentTopic', this.state.currentTopic);
        return (
            <div className="english-card-page__container">
                <div className="english-card-page__wrapper">
                    <div className="english-card-page__content">
                        <div className="english-card-page__title">
                            <span><strong>{topic}</strong> Flashcard</span>
                        </div>
                        <div className="english-card-page__card-manager">
                            <div className="english-card-page__card-list">
                                {this.state.currentTopic && this.state.currentTopic.length > 0 && (
                                    <FlashcardManager
                                        getCurrentIndex={this.getCurrentIndex}
                                        cards={this.state.currentTopic}
                                    />
                                )}
                            </div>
                            <div className="english-card-page__options-wrapper">
                                <div className="english-card-options__content">
                                    <div className="english-card-options__title">
                                        <span className="english-card-options__title-text">Example</span>
                                        <div className="bottom-line"></div>
                                    </div>
                                    <ul>
                                        {this.state.exampleList.map(item => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});


export default connect(mapStateToProps, null)(withRouter(EnglishCardPage));
