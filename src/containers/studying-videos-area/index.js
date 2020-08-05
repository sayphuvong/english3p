import React from 'react';
import './style.scss';
import RepresentCardContainer from '../../containers/represent-card-container';
import englishPronunciationImage from '../../static/imgs/videos/english-pronunciation.png';
import greetingImage from '../../static/imgs/videos/greeting.jpg';
import interviewImage from '../../static/imgs/videos/interview.jpg';


class VideoStudyCard extends React.PureComponent {
    render() {
        const { areaName } = this.props;
        return (
            <>
                <div className="video-study-card__area">
                    <div className="video-study-card__title__wrap">
                        <h3 className="video-study-card__title">{areaName}</h3>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="video-study-card__area-body">
                        <RepresentCardContainer
                            linkTo="/video-study/greeting"
                            title="Greeting"
                            thumbnail={greetingImage}
                        />
                        <RepresentCardContainer
                            linkTo="/video-study/pronunciation"
                            title="Pronunciation"
                            thumbnail={englishPronunciationImage}
                        />
                        <RepresentCardContainer
                            linkTo="/video-study/interview"
                            title="Interview"
                            thumbnail={interviewImage}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default VideoStudyCard;
