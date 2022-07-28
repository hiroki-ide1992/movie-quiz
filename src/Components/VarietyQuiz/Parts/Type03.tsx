import React, { useState, useContext } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//コンポーネント
import ModalBox from './ModalBox'

//タイプ
import { videoType } from '../../../Types/Quiz/Type'

//ライブラリ
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


type Props = {
  data:videoType
}

const QuizType01:React.FC<Props> = ( { data }) =>  {

  const [modalShow, setModalShow] = useState(false);
  const [answer, setAnswer] = useState(2);
  const [active, setActive] = useState(0);

  const ClickBtn = (e:any) => {
    let i = e.target.id;
    setActive(i);
  }

  const AnswerSubmit = () => {
  if(data.answer == active){
    setAnswer(1);
    setModalShow(true);
  }else{
    setAnswer(2);
    setModalShow(true);
  }
  }


  return (
    <div className="animate__animated animate__fadeIn">
    <ModalBox data={answer} open={modalShow}/>
    <Type03Box>

      <TypeBtn className={active == 1 ? "animate__animated animate__bounceIn":""} data-isClick={ active == 1 ? "true" : "false"}>
        <a onClick={ClickBtn} id="1">{ data.answerText01 }</a>
      </TypeBtn>
      <TypeBtn className={active == 2 ? "animate__animated animate__bounceIn":""} data-isClick={ active == 2 ? "true" : "false"}>
        <a onClick={ClickBtn} id="2">{ data.answerText02 }</a>
      </TypeBtn>
      <TypeBtn className={active == 3 ? "animate__animated animate__bounceIn":""} data-isClick={ active == 3 ? "true" : "false"}>
        <a onClick={ClickBtn} id="3">{ data.answerText03 }</a>
      </TypeBtn>
      <TypeBtn className={active == 4 ? "animate__animated animate__bounceIn":""} data-isClick={ active == 4 ? "true" : "false"}>
        <a onClick={ClickBtn} id="4">{ data.answerText04 }</a>
      </TypeBtn>

    </Type03Box>
    <AnswerBtn onClick={AnswerSubmit}>解 答</AnswerBtn>
    </div>
  );
}


const Type03Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
`

const TypeBtn = styled.p`
  font-size: 2rem;
  background-color: #ffffff;
  width: 45%;
  box-shadow: 0px 3px 6px #e6e6e6;
  cursor: pointer;
  border-radius: 100px;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  a{
    display: block;
    width: 100%;
    padding: 15px 0px;
  }
  &[data-isClick="true"]{
      background-color: #2b546a;
      color: #ffffff;
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

export default QuizType01;
