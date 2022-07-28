import React, { useState, createContext, useEffect } from 'react'

//画像
import pt01 from '../Asset/common/pt01.jpg'

//コンポーネント
import HeaderSmall from '../CommonParts/HeaderSmall'
import QuizCategory from './Parts/QuizCategory'
import QuizContent from './Parts/QuizContent'
import Type01 from './Parts/Type01'
import Type02 from './Parts/Type02'
import Type03 from './Parts/Type03'
import Type04 from './Parts/Type04'


//データ
import { maruBatuData } from '../../Data/Quiz/QuizMaruBatu'
import { turnData } from '../../Data/Quiz/QuizTurn'
import { videoData } from '../../Data/Quiz/QuizVideo'
import { manyData } from '../../Data/Quiz/QuizMany'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


//クイズタイプシャッフル
let quizTypes = [1,2,3,4];
let b = quizTypes.length;
while (b) {
  var c = Math.floor( Math.random() * b );
  var z = quizTypes[--b];
  quizTypes[b] = quizTypes[c];
  quizTypes[c] = z;
};

export const QuizCount = createContext<any>(0);

const VarietyQuizMain:React.FC = () =>  {


  //問題をシャッフル
  let archiveNumber = [
    0,1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,
    51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,
    71,72,73,74,75,76,77,78,79,];
  let a = archiveNumber.length;
  while (a) {
    var j = Math.floor( Math.random() * a );
    var t = archiveNumber[--a];
    archiveNumber[a] = archiveNumber[j];
    archiveNumber[j] = t;
  };

  //クイズ進行の全体を監視
  const [next, setNext] = useState(0);

  //クイズのアーカイブを監視
  let currentQuiz = archiveNumber[next];

  //現在のクイズ数を監視
  let currentNumber = next + 1;

  //クイズのタイプを監視
  let currentType = quizTypes[next];

  return (
    <Background>
      <HeaderSmall />
      <main>
      <section>

        <QuizCount.Provider value={[next, setNext]}>
          <QuizBox>
            <QuizCategory quizType={quizTypes[next]} />
            {currentType == 1 ? <QuizContent current={currentNumber} maruBatu={maruBatuData[currentQuiz]} />:""}
            {currentType == 2 ? <QuizContent current={currentNumber} turn={turnData[currentQuiz]} />:""}
            {currentType == 3 ? <QuizContent current={currentNumber} video={videoData[currentQuiz]} />:""}
            {currentType == 4 ? <QuizContent current={currentNumber} many={manyData[currentQuiz]} />:""}
          </QuizBox>
        </QuizCount.Provider>

        <QuizCount.Provider value={[next, setNext]}>
          <AnswerBox>
            {currentType == 1 ? <Type01 data={maruBatuData[currentQuiz]}/>:""}
            {currentType == 2 ? <Type02 data={turnData[currentQuiz]}/>:""}
            {currentType == 3 ? <Type03 data={videoData[currentQuiz]}/>:""}
            {currentType == 4 ? <Type04 data={manyData[currentQuiz]}/>:""}
          </AnswerBox>
        </QuizCount.Provider>
      </section>
      </main>
    </Background>
  );
}

//クイズボックス
const QuizBox = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 30px;
`
//答え
const AnswerBox = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 30px;
`


//共通プロパティ
const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
  color: #2b546a;
  font-size: 1.6rem;
`

export default VarietyQuizMain;
