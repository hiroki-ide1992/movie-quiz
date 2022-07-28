import * as React from 'react';
import {useContext, useState, useEffect } from 'react';
import GameProgres  from '../context/gameProgres';

const Timer: React.FC = () => {
  const {endGame, setEndGame, bonusGame} = useContext(GameProgres);
  const [ time, setTime ] = useState(60);
  const [ animate, setAnimate ] = useState("");

  useEffect(() => {
    if (!time) return setEndGame('end');

    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);


  useEffect(() => {
    if(bonusGame){
      setTime(time + 2);
    }
  },[bonusGame])

  if(endGame == "end"){
    setTimeout(() => {
      setAnimate('animate__backOutUp')
    },1800);
  }


  return(
    <div className="timer">
      <div className="timer__lastFive">
        { time == 0 ? <div className={`timer__end animate__animated animate__tada ${animate}`}>終了</div> : ""}
        { time <= 5 && time > 0 ? <div className="timer__five animate__animated animate__fadeInOrigin">{ time }</div> : ""}
      </div>
      <div className="timer__box">
        <div className="timer__text">- TIME -</div>
        { time <= 60 ?
          <div className="timer__seconds">
            { time }
          </div>:<div className="timer__seconds">60</div>
        }
        {
          bonusGame ? <div className="timer__bonus animate__animated animate__heartBeat">＋2</div>:""
        }
      </div>
    </div>
  )
}

export default Timer;