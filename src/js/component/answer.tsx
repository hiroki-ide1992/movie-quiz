import * as React   from 'react';
import {useContext, useState, useEffect } from 'react';
import GameProgres  from '../context/gameProgres';
import AnimateCSS   from '../module/_aoutClassBtn';
import InsertText   from '../module/_insertText';
import NextQuestion from '../module/_nextQuestion';
import scoreCount   from '../module/_scoreCount';
import BonusSet     from '../module/_bonusSet';

const Answer: React.FC = () => {

  const {text, match, answer, setAnimate, question, setQuestion, score, setScore, setBonusGame} = useContext(GameProgres);
  const [next, setNext]   = useState<number>(0);
  const countWord: number = next + 1;
  let answerMax: number   = text.length - 1;


  /* 秘密 */
  const Trick = document.querySelector('#Trick');
  const trick = () => {
    if(next - 1 < answerMax){
      const answerBox  = document.querySelector('.notInsert');
      const addAnimate = document.querySelectorAll('.answer__inputItem');
      InsertText(answerBox, "F", addAnimate);
      next == answerMax ? "": setNext(next + 1);
    }

    if(next == answerMax){

      const HIDE_CARD     = document.querySelector('#HIDE_CARD');
      const ANSWER_TARGET = document.querySelector('#ANSWER_TARGET');
      const setClass      = document.querySelectorAll('.answer__reflectItem--set');
      const reflectItem   = document.querySelectorAll('.answer__reflectItem');
      const hint = document.querySelectorAll('.answer__reflectItem--hint');

      NextQuestion(HIDE_CARD, ANSWER_TARGET, setClass);

      new Promise((resolve, reject) => {resolve(null);})
      .then(() => {
        setTimeout(() => {
          setScore(score + 100 * scoreCount(reflectItem, answer, hint));
          setAnimate('animate__fadeOutRight');
        }, 1200);
      })
      .then(() => {
        setTimeout(() => {
          setAnimate('');
          setNext(0);
          setQuestion(question + 1);
        }, 1600);
      })
      .then(() => {
        setTimeout(() => {
          setAnimate('animate__fadeInLeftOrigin');
        }, 2000);
      });
    }
  }


  const clickText = (e) => {
    /* 押されたボタンを回答ボックスに差し込み */
    if(next - 1 < answerMax){
      const clicText   = e.target.textContent;
      const answerBox  = document.querySelector('.notInsert');
      const addAnimate = document.querySelectorAll('.answer__inputItem');
      InsertText(answerBox, clicText, addAnimate);
      next == answerMax ? "": setNext(next + 1);
    }

    /* 次の問題へ移る処理 */
    if(next == answerMax){

      const HIDE_CARD     = document.querySelector('#HIDE_CARD');
      const ANSWER_TARGET = document.querySelector('#ANSWER_TARGET');
      const setClass      = document.querySelectorAll('.answer__reflectItem--set');
      const reflectItem   = document.querySelectorAll('.answer__reflectItem');
      const hint = document.querySelectorAll('.answer__reflectItem--hint');
      const correct   = scoreCount(reflectItem, answer, hint);
      const bonus     = BonusSet(reflectItem, answer);
      const pulsBonus = bonus ? 1000:0;

      NextQuestion(HIDE_CARD, ANSWER_TARGET, setClass);

      new Promise((resolve, reject) => {
        setBonusGame(bonus);
        resolve(null);
      })
      .then(() => {
        setTimeout(() => {
          setScore(score + pulsBonus + 100 * correct);
          setAnimate('animate__fadeOutRight');
        }, 1200);
      })
      .then(() => {
        setTimeout(() => {
          setAnimate('');
          setNext(0);
          setBonusGame(false);
          setQuestion(question + 1);
        }, 1600);
      })
      .then(() => {
        setTimeout(() => {
          setAnimate('animate__fadeInLeftOrigin');
        }, 2000);
      });
    }
  };

  /* ボタンが押されるたびにアニメーションを付与 */
  useEffect(() => {
    AnimateCSS('.answer__inputItem', 'flipInX');
  });

  return(
    <div className="answer">
      <div className="answer__reflectBox">
        <ul className="answer__reflect">
          {
            match.map((text, index) => {
              return text == "" ?
              <li key={index} className="answer__reflectItem notInsert animate__animated">{ text }</li>
              :
              <li key={index} className="answer__reflectItem animate__animated answer__reflectItem--hint">{ text }</li>
            })
          }
        </ul>
        <ul id="ANSWER_TARGET" className="answer__target">
          {
            answer.map((text, index) => {
              return(
                <li key={index} className="answer__targetItem">{ text }</li>
              )
            })
          }
        </ul>
      </div>

      <div id="HIDE_CARD" className="card card--border card--dot animate__animated">
        <a id="Trick" onClick={trick} className={`answer__countWord ${countWord < answerMax + 1 ? "": 'answer__countWord--last'}`}>
          { countWord < answerMax + 1 ? countWord + '文字目': 'さいご！' }
        </a>
        <div className="answer__input">
          {
            text[next].map((text, index) => {
              return <button onClick={clickText} key={index} className="answer__inputItem">{text}</button>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Answer;