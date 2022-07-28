import React, { useState, useCallback } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//コンポーネント
import ModalBox from './ModalBox'

//タイプ
import { maruBatuType } from '../../../Types/Quiz/Type'

//ライブラリ
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


type Props = {
  data:maruBatuType
}

const QuizType01:React.FC<Props> = ( { data } ) =>  {


  const [modalShow, setModalShow] = useState(false);
  const [answer, setAnswer] = useState(2);
  const [check, setCheck] = useState(0);
  const [result, setResult] = useState(0);

  //〇×ボタン制御
  const MaruClick = () => {
    setCheck(1)
    setResult(1)
  }
  const BatuClick = () => {
    setCheck(2)
    setResult(2)
  }

  //解答ボタン制御
  const AnswerSubmit = () => {
    if(data.answer == result){
      setAnswer(1)
      setModalShow(true)
    }else{
      setAnswer(2)
      setModalShow(true)
    }
  }

  return (
    <div className="animate__animated animate__fadeIn">
{/* <Progress>
      <ProgressBack></ProgressBack>
      <ProgressTime></ProgressTime>
    </Progress> */}
    <ModalBox data={answer} open={modalShow}/>
    <Type01Box>

      <TypeBtn01 data-check={check == 1 ? "true":"false"}
      className={check == 1 ? "animate__animated animate__bounceIn":""}>
        <a onClick={MaruClick}>〇</a>
      </TypeBtn01>

      <TypeBtn02 data-check={check == 2 ? "true":"false"}
      className={check == 2 ? "animate__animated animate__bounceIn":""}>
        <a onClick={BatuClick}>×</a>
      </TypeBtn02>

    </Type01Box>
    <AnswerBtn onClick={AnswerSubmit}>解 答</AnswerBtn>
    </div>
  );
}


const Type01Box = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`
const Input = styled.input`
  display: none;
`
const TypeBtn = styled.div`
  font-size: 15rem;
  display: flex;
  background-color: #ffffff;
  width: 260px;
  height: 260px;
  box-shadow: 0px 3px 6px #e6e6e6;
  cursor: pointer;
  border-radius: 4px;
  a{
    width: 100%;
    height: 100%;
    line-height: 260px;
  }
`
const TypeBtn01 = styled(TypeBtn)`
  color: #ff4c4c !important;
  &[data-check='true']{
    color: #ffffff !important;
    background-color: #ff4c4c;
  }
`
const TypeBtn02 = styled(TypeBtn)`
  color: #0068b7 !important;
  font-size: 18rem;
  &[data-check='true']{
    color: #ffffff !important;
    background-color: #0068b7;
  }
`
const AnswerBtn = styled.a`
  font-size: 2rem;
  font-weight: bold;
  background-color: #ffffff;
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  border-radius: 100px;
  box-shadow: 0px 3px 6px #e6e6e6;
  margin-bottom: 20px;
  cursor: pointer;
`

/* //プログレスバー
const Progress = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
  top: -10px;
  overflow: hidden;
  margin: 0px 0px 20px 0px;
  border-radius: 100px;
  border: 4px solid #ffffff;
`
const ProgressBack = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
  background-color: #eeeeee;
`
const late = keyframes`
  0%  {transform: translateX(0px);background-color: #86ffff;}
  46% {background-color: #86ffff;}
  50% {background-color: #ffe37c;}
  76% {background-color: #ffe37c;}
  80% {background-color: #ff4c4c;}
  100%{transform: translateX(-960px);background-color: #ff4c4c;}
`
const ProgressTime = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
  background-color: #86ffff;
  animation: ${late} 10s linear;
  animation-fill-mode: forwards;
` */


export default QuizType01;
