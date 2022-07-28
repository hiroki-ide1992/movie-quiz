import * as React   from 'react';
import {useContext} from 'react';
import GameProgres  from '../context/gameProgres';
const Header = () => {

  const { score } = useContext(GameProgres);

  return(
    <header className="header">
      <div className="header__inner">
        <div className="header__box">
          　<a className="header__exit" href="/">やめる</a>
        </div>

        <div className="header__box">
          <div className="header__state">
            <p className="header__stateName">SCORE</p>
            <p className="header__stateValue">{ score }</p>
          </div>
        </div>

      </div>
      <div className="header__borderBox">
        <svg className="header__borderBack" xmlns="http://www.w3.org/2000/svg" width="1920px" viewBox="0 0 1800 50" preserveAspectRatio="none" id="svg-bg">
          <path d="M0,0 v15 q10,10 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 v-25 Z" fill="#3f9bb7"></path>
        </svg>
        <svg className="header__borderTop" xmlns="http://www.w3.org/2000/svg" width="1920px" viewBox="0 0 1800 50" preserveAspectRatio="none" id="svg-bg">
        <path d="M0,0 v15 q10,10 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 v-25 Z" fill="#75dfff"></path>
        </svg>
      </div>
      
    </header>
  )
}

export default Header;