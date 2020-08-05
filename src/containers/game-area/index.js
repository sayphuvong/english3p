import React from 'react';
import './style.scss';
import GameBox from '../../components/game-box';

class GameArea extends React.PureComponent {
    render() {
        const {
            title,
            gameData,
        } = this.props;
        return (
            <div className="game-area__container">
                <div className="game-area__title__wrap">
                    <h3 className="game-area__title">{title}</h3>
                    <div className="bottom-line"></div>
                </div>
                <div className="game-area__wrap" id="mini-game">
                    {gameData && gameData.map((data, index) => (
                        <GameBox key={index + 'game-area__wrap'} thumbnail={data.imgSource} embedLink={data.embedLink} />
                    ))}
                </div>
            </div>
        );
    }
}

export default GameArea;
