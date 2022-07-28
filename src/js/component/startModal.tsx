import * as React     from 'react';
import GameProgres    from '../context/gameProgres';
import { useContext, useEffect, useState } from 'react';


const StartModal: React.FC = () => {

  const [animate, setAnimate] = useState('animate__bounceInLeft');
  const [feed, setFeedout] = useState('');
  const [notView, setNotView] = useState('');

  useEffect(() => {

    setTimeout(() => {
      setAnimate('animate__bounceOutRight');
    }, 1300);
    setTimeout(() => {
      setFeedout('animate__fadeOut');
    }, 1500);
    setTimeout(() => {
      setNotView('notView');
    }, 1800);
  });

  return(
    <div className={`startGame animate__animated ${feed} ${notView}`}>
      <div className="startGame__inner">
        <p className={`startGame__start animate__animated ${animate}`}>スタート!</p>
      </div>
    </div>
  )
}

export default StartModal;