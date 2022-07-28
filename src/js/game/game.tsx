import * as React       from 'react';
import * as ReactDOM    from 'react-dom';
import GameProgres      from '../context/gameProgres';
import Header           from '../component/header';
import Timer            from '../component/timer';
import Films            from '../component/films';
import Answer           from '../component/answer';
import EndModal         from '../component/endModal';
import StartModal       from '../component/startModal';
import ShuffleQuestion  from '../module/_shuffleQuestion';
import { questionData } from '../../data/question/questionData';
import { useState, useEffect} from 'react';


const Questions = ShuffleQuestion(questionData, questionData.length - 1);

const Game = () => {
  const [question, setQuestion]   = useState(0);
  const [endGame, setEndGame]     = useState('start');
  const [score, setScore]         = useState(0);
  const [bonusGame, setBonusGame] = useState(false);
  const [animate, setAnimate]     = useState<string>('animate__fadeInDownOrigin');
  const {id, answer, film, match, text} = Questions[question];

  return(
    <>
    <GameProgres.Provider
      value={{
          id,
          answer,
          film,
          match,
          text,
          setAnimate,
          question,
          setQuestion,
          score,
          setScore,
          endGame,
          setEndGame,
          bonusGame,
          setBonusGame
      }}>

      <Header />
      <section className="game">
        <div className="game__cover">
          <div className="game__inner">
            <div className="game__container">
              <Timer />
            </div>
            <div className={`game__main animate__animated ${animate}`}>
              <div className="game__container game__container--margin0">
                <Films />
              </div>
              <div className="game__container">
                <Answer />
              </div>
            </div>
          </div>
        </div>
      </section>
      {endGame == "end" ? <EndModal />: ""}
      {endGame == "start" ? <StartModal />: ""}
    </GameProgres.Provider>
    </>
  )
}


ReactDOM.render(<Game />, document.querySelector('#game'));