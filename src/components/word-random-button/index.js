import React from 'react';
import './style.scss';
import Swal from 'sweetalert2';
import { ENGLISH_3000_COMMON_WORDS } from '../../constants/3000';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class WordRandomButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.english3000CommonWords = Object.values(ENGLISH_3000_COMMON_WORDS);
    }
    handleWordRandomClick = () => {
        let words = [];
        for(let i = 0; i < 10; i++) {
            const iRandom = getRndInteger(0, this.english3000CommonWords.length - 1);
            words.push(this.english3000CommonWords[iRandom].word);
        }

        let englishWords = '';
        words.forEach(wrd => englishWords += `<span class="english-word__item">${wrd}</span>`);

        Swal.fire({
            title: '10 ENGLISH COMMON WORD',
            html: `
                <div class="english-words__wrapper">
                    <div class="english-words__content">${englishWords}</div>
                </div>
            `,
            confirmButtonColor: "#7c0405",
          })
    }
    
    render() {
        return (
            <div className="word-random-btn__wrap">
                <button className="word-random-btn" onClick={this.handleWordRandomClick}>
                    <span>Get vocabularies</span>
                </button>
            </div>
        );
    }
}

export default WordRandomButton;
