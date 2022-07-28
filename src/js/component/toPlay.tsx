import * as React     from 'react';
import Swiper from 'swiper';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { useContext, useEffect} from 'react';

import Prev from '../../img/common/prev.svg';
import Next from '../../img/common/next.svg';
import Ex0 from '../../img/top/ex0.jpg';
import Ex1 from '../../img/top/ex1.png';
import Ex2 from '../../img/top/ex2.png';
import Ex3 from '../../img/top/ex3.png';
import Ex4 from '../../img/top/ex4.png';
import Ex5 from '../../img/top/ex5.png';
import Ex6 from '../../img/top/ex6.png';
import Ex7 from '../../img/top/ex7.png';
import ExSecret     from '../../img/top/ex_secret.jpg';
import ExSecretText from '../../img/top/ex_secret_text.png';

type Modal = {
  isOpen: string,
  close: any
}


const ToPlay: React.FC<Modal> = ( { isOpen, close } ) => {

  SwiperCore.use([Pagination,Navigation]);

  useEffect(() => {
    let toPlay = new Swiper('.swiper-container', {
      freeMode:false,
      threshold: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    const Thumb = document.querySelectorAll('.toPlay__thumbItem');
    const Next  = document.querySelector('.swiper-button-next');
    const SecretImage1 = document.querySelector('#secretImage1');
    const SecretImage2 = document.querySelector('#secretImage2');
    const PassiveThumb = document.querySelector('.passive');

    toPlay.on('slideChange', function () {
      const currentSlide = toPlay.realIndex + 1;

      for(let i = 0; i < Thumb.length; i++){Thumb[i].classList.remove('view');}
      Thumb[currentSlide].classList.add('view');

      currentSlide == 5 ? Next.classList.add('notView'): Next.classList.remove('notView');

      if(currentSlide == 6 && !SecretImage1.classList.contains('view')){
        setTimeout(() =>{
          SecretImage1.classList.add('view');
        },1000);
        setTimeout(() =>{
          SecretImage2.classList.add('view');
        },2300);
      }

      if(currentSlide > 3){
        PassiveThumb.classList.add('passive--not')
      }else{
        PassiveThumb.classList.remove('passive--not');
      }
    });
  },[]);

  return(
    <div className={`toPlay ${isOpen}`}>
      <div className="toPlay__cover" onClick={() => close('')}></div>
      <div className="toPlay__inner">

        <div className="toPlay__closeBtn" onClick={() => close('')}>×</div>

        <ul className="toPlay__thumb">
          <li className="toPlay__thumbItem passive"><img src={Ex0} alt=""/></li>
          <li className="toPlay__thumbItem view"><img src={Ex1} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex2} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex3} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex4} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex5} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex6} alt=""/></li>
          <li className="toPlay__thumbItem"><img src={Ex7} alt=""/></li>
        </ul>

        <div className="swiper-container toPlay__slide">

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="toPlay__card">
                <p className="toPlay__heading">あそびかた - その１ -</p>
                <p className="toPlay__text">
                  ゲームがはじまると、中央にキャラクターの映像が表示されるよ！<br/>
                  どんなキャラクターなのかな？
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__card">
                <p className="toPlay__heading">あそびかた - その２ -</p>
                <p className="toPlay__text">
                  なにも書かれていない白カードにはこれから文字を入れるよ！<br/>
                  青カードの中にはキャラクターのなまえのヒントが入っているからよく見てね！
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__card">
                <p className="toPlay__heading">あそびかた - その３ -</p>
                <p className="toPlay__text">
                  白カードの中にいれる文字を３つの中から選択しよう！<br/>
                  時間制限があるけど、いちど押した文字は戻せないから落ち着いて選択するんだ！<br/>
                  これを白カードの枚数分繰り返すよ！
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__card">
                <p className="toPlay__heading">全問正解ボーナス！</p>
                <p className="toPlay__text">
                  選択した文字がこたえと一致しているとボーナスだ！<br/>
                  通常は１文字正解する毎に１００点だけど、全問正解ならさらに１０００点プラスされるよ！<br/>
                  さらにさらに、残り時間が２秒増えるんだ！
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__card">
                <p className="toPlay__heading">おわり</p>
                <p className="toPlay__text">
                  説明は以上だよ！<br/>
                  どうぞクイズを楽しんでねー♪
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__secret">
                <img id="secretImage1" className="image1" src={ExSecret} alt=""/>
                <img id="secretImage2" className="image2" src={ExSecretText} alt=""/>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="toPlay__card">
                <div className="pattern-zigzag-md secret">
                <p className="toPlay__heading">秘密のFボタン…</p>
                <p className="toPlay__text">
                  歳をくってくると、記憶が曖昧になることってあるよね！<br/>
                  そんな時はのび太が秘密道具を使うがごとくズルをすればいいんだ！<br/>
                  ゲーム内に秘密のボタンがあって、これを押すとどんな問題も正解になるんだ！これは楽ちん！<br/>
                  でね、ボタンの在りは<br/><br/>
                  「ちたゅうおたうにたある、もたじたすたうがかたかれていたるばしたょ」だよ！<br/>
                  <span className="toPlay__hint">ヒント：ドラえもん「ぼくは○ぬきじゃなーい！！」</span>
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-button-prev"><img src={Prev} alt=""/></div>
          <div className="swiper-button-next"><img src={Next} alt=""/></div>

        </div>

      </div>
    </div>
  )
}

export default ToPlay;