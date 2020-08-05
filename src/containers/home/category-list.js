import React from 'react';
import GameArea from '../../containers/game-area';
import FastVocab from '../../static/imgs/games/fast_vocab.png';
import FastPhrase from '../../static/imgs/games/fast_phrase.png';
import MonsterNumber from '../../static/imgs/games/monster_number.png';
import EnglishCardArea from '../../containers/english-card-area';
import StudyingVideosArea from '../../containers/studying-videos-area';


class CategoryList extends React.PureComponent {
    render() {
        return (
            <>
                <GameArea
                    title="Let's try favorite games"
                    gameData={[
                        {
                            imgSource: FastVocab,
                            embedLink: 'https://www.gamestolearnenglish.com/fast-english/embed.html#animals'
                        },
                        {
                            imgSource: FastPhrase,
                            embedLink: 'https://www.gamestolearnenglish.com/fast-english/embed.html#body'
                        },
                        {
                            imgSource: MonsterNumber,
                            embedLink: 'https://www.gamestolearnenglish.com/fast-english/embed.html#jobs'
                        },
                    ]}
                />
                <EnglishCardArea areaName="Let's try learning with English Cards" />
                <StudyingVideosArea areaName="Study english with videos" />
{/* 
                <RepresentCardContainer
                    title="Let's try learning with English Cards"
                />
                <RepresentCardContainer
                    title="Vocabularies follow the topics"
                /> */}
            </>
        );
    }
}

export default CategoryList;
