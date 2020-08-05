import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EnglishCardPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            videoData: {
                pronunciation: [{
                    embedUrl: 'https://www.youtube.com/embed/5yYQopM01sI',
                    title: "a"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/izJGrivI90c',
                    title: "au"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/dvtj7Uy652g',
                    title: "ai"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/_SJ_kTn8Tyw',
                    title: "ɔɪ"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/nV-dwWl2cA8',
                    title: "eə"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/Tn20gKy4_TY',
                    title: "ei"
                }],
                greeting: [{
                    embedUrl: 'https://www.youtube.com/embed/F8nLAhvfybk',
                    title: "Greeting Conversations"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/PfSsyq06TIs',
                    title: "Meeting new people"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/orWL34vG3tY',
                    title: "How to say HELLO! How are you?"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/tH_XZZ8-QTA',
                    title: "Greetings, introductions & leave takings"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/7k4uBAiJsMM',
                    title: "Hello. What's your name?"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/gVIFEVLzP4o',
                    title: "The Greetings Song"
                }],
                interview: [{
                    embedUrl: 'https://www.youtube.com/embed/nhTcuUvLGOE',
                    title: "How to Answer Job Interview Questions in English"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/yBtMwyQFXwA',
                    title: "How to Interview for a Job in American English, part 1/5"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/iZQnhUYEPoY',
                    title: "How to Interview for a Job in American English, part 2/5"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/3xywXO-VHCg',
                    title: "How to Interview for a Job in American English, part 3/5"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/To4IJuHYt94',
                    title: "How to Interview for a Job in American English, part 4/5"
                }, {
                    embedUrl: 'https://www.youtube.com/embed/OTdFPlXfFj4',
                    title: "How to Interview for a Job in American English, part 5/5"
                }],
            },
            currentTopic: null,
            ratio: 560 / 315,
        }
    }

    getHeightFromWidth = (width) => {
        return Math.round(width / (560 / 315));
    }

    componentDidMount = () => {
        console.debug('this.state.ratio', this.state.ratio)
        const { topic } = this.props.match.params;
        if (topic) {
            this.setState({ currentTopic: this.state.videoData[topic] });
        }
    }

    // 560/315

    render() {
        const { topic } = this.props.match.params;
        return (
            <div className="video-study-page__container">
                <div className="video-study-page__wrapper">
                    {this.state.currentTopic && (
                        <div className="video-study-page__content">

                            <div className="video-study-page__title">
                                <span className="video-study-page__title-text">{topic} topic</span>
                                <span className="bottom-line"></span>
                            </div>
                            <div className="video-study-page__video-list">
                                {this.state.currentTopic && this.state.currentTopic.map(item => {
                                    return (
                                        <div className="video-study-page__video-card">
                                            <div className="video-card__iframe-wrapper">
                                                <iframe
                                                    title={topic}
                                                    width="300"
                                                    height="169"
                                                    src={item.embedUrl}
                                                    frameborder="0"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen="true"
                                                />
                                            </div>
                                            <span className="video-card__title">{item.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});


export default connect(mapStateToProps, null)(withRouter(EnglishCardPage));
