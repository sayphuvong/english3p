import React from 'react';
import './style.scss';
import RepresentCardContainer from '../../containers/represent-card-container';
import FamilyCardImage from '../../static/imgs/english-card/family-card.jpg';
import AnimalCardImage from '../../static/imgs/english-card/animal-card.jpg';
import TravelCardImage from '../../static/imgs/english-card/travel-card.jpg';


class VocabArea extends React.PureComponent {
    render() {
        const { areaName } = this.props;
        return (
            <>
                <div className="english-card__area">
                    <div className="english-card__title__wrap">
                        <h3 className="english-card__title">{areaName}</h3>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="english-card__area-body">
                        <RepresentCardContainer
                            linkTo="/english3p/english-card"
                            title="Family"
                            thumbnail={FamilyCardImage}
                        />
                        <RepresentCardContainer
                            linkTo="/english3p/english-card"
                            title="Animal"
                            thumbnail={AnimalCardImage}
                        />
                        <RepresentCardContainer
                            linkTo="/english3p/english-card"
                            title="Travel"
                            thumbnail={TravelCardImage}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default VocabArea;
