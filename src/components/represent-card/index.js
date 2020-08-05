import React from 'react';
import './style.scss';

class RepresentCard extends React.PureComponent {
    render() {
        const { thumbnail, title } = this.props;
        return (
            <div className="represent-card__wrap">
                <div className="represent-card__content">
                    <span className="represent-card__title">{title}</span>
                    <img src={thumbnail} alt="" />
                </div>
            </div>
        );
    }
}

export default RepresentCard;
