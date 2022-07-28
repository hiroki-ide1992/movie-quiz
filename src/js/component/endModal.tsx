import * as React     from 'react';
import GameProgres    from '../context/gameProgres';
import { useContext, useEffect, useState } from 'react';
import evaluation1001  from '../../img/endmodal/evaluation_100.jpg';
import evaluation1002  from '../../img/endmodal/evaluation_100_text.png';
import evaluation901  from '../../img/endmodal/evaluation_90.jpg';
import evaluation902  from '../../img/endmodal/evaluation_90_text.png';
import evaluation801  from '../../img/endmodal/evaluation_80.jpg';
import evaluation802  from '../../img/endmodal/evaluation_80_text.png';
import evaluation701  from '../../img/endmodal/evaluation_70.jpg';
import evaluation702  from '../../img/endmodal/evaluation_70_text.png';
import evaluation501  from '../../img/endmodal/evaluation_50.jpg';
import evaluation502  from '../../img/endmodal/evaluation_50_text.png';
import evaluation301  from '../../img/endmodal/evaluation_30.jpg';
import evaluation302  from '../../img/endmodal/evaluation_30_text.png';
import evaluation201  from '../../img/endmodal/evaluation_20.jpg';
import evaluation202  from '../../img/endmodal/evaluation_20_text.png';

const EndModal: React.FC = () => {

  const { score, endGame } = useContext(GameProgres);
  const [view, setView] = useState('');

  useEffect(() => {
    if(endGame == "end"){
      const animate1 = document.querySelector('.endGame__scoreBox');
      const animate2 = document.querySelector('.endGame__evaluationBox');
      const animate3 = document.querySelector('.endGame__btnBox');
      
      setTimeout(() => {
        animate1.classList.add('view');
      },3000);
      setTimeout(() => {
        animate2.classList.add('animate__bounceInLeft','view');
      },4000);
      setTimeout(() => {
        setView('view');
      },5000);
      setTimeout(() => {
        animate3.classList.add('view');
      },6200);
    }
  },[])
  

  return(
    <div className={`endGame ${endGame == "end" ? "endGame--view":""}`}>
      <div className="endGame__inner">

        <div className={`endGame__scoreBox animate__animated animate__jello`}>
          <p className="endGame__yourScore">あなたのスコア</p>
          <div className="endGame__score">- { score } -</div>
        </div>

        <div className="endGame__evaluationBox animate__animated">
          <p className="endGame__yourEvaluation">評価</p>

            {score >= 20000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation1001} alt=""/>
                <img className={`image2 ${view}`} src={evaluation1002} alt=""/>
              </div>:""
            }
            {
            score >= 16000 && score < 20000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation901} alt=""/>
                <img className={`image2 ${view}`} src={evaluation902} alt=""/>
              </div>:""
            }
            {
            score >= 12000 && score < 16000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation801} alt=""/>
                <img className={`image2 ${view}`} src={evaluation802} alt=""/>
              </div>:""
            }
            {
            score >= 8000 && score < 12000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation701} alt=""/>
                <img className={`image2 ${view}`} src={evaluation702} alt=""/>
              </div>:""
            }
            {
            score >= 6000 && score < 8000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation501} alt=""/>
                <img className={`image2 ${view}`} src={evaluation502} alt=""/>
              </div>:""
            }
            {
            score >= 4000 && score < 6000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation301} alt=""/>
                <img className={`image2 ${view}`} src={evaluation302} alt=""/>
              </div>:""
            }
            {
            score < 4000 ?
              <div className="endGame__evaluation">
                <img className="image1" src={evaluation201} alt=""/>
                <img className={`image2 ${view}`} src={evaluation202} alt=""/>
              </div>:""
            }
        </div>

        <div className="endGame__btnBox animate__animated animate__fadeInUp">
          <a className="btn02" href="/">トップへ</a>
        </div>

      </div>
    </div>
  )
}

export default EndModal;