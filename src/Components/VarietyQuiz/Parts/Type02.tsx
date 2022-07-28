import React, { useState, useContext } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//コンポーネント
import ModalBox from './ModalBox'


//タイプ
import { turnType } from '../../../Types/Quiz/Type'

//ライブラリ
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


type Props = {
  data:turnType
}

const QuizType02:React.FC<Props> = ( { data }) =>  {

  const [modalShow, setModalShow] = useState(false);
  const [answer, setAnswer] = useState(2);
  const [count, setCount] = useState(1);

  //ボタン数字監視
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);

  //ボタン色変更
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const num = [0,0,0,0];

  const SetTurn = (e:any) => {
    let i = e.target.id;
    let d = e.target.getAttribute('data-isClick');

    if(count <= 4 && d == "false"){
      num[i] = count;
      if(i == 0){
        setItem1(num[i]);
        setActive1(!active1);
      }else if (i == 1){
        setItem2(num[i]);
        setActive2(!active2);
      }else if (i == 2){
        setItem3(num[i]);
        setActive3(!active3);
      }else if (i == 3){
        setItem4(num[i]);
        setActive4(!active4);
      }
      setCount(count + 1);
    }else if(count <= 5 && d == "true"){
      if(i == 0){
        setItem1(num[i]--);
        setActive1(!active1);
      }else if (i == 1){
        setItem2(num[i]--);
        setActive2(!active2);
      }else if (i == 2){
        setItem3(num[i]--);
        setActive3(!active3);
      }else if (i == 3){
        setItem4(num[i]--);
        setActive4(!active4);
      }
      setCount(count - 1);
    }
  }

  const AnswerConfirmation = () => {
    let a = {aa:`${item1}${item2}${item3}${item4}`}
    data.answer == a.aa ? setAnswer(1):setAnswer(2);
    setModalShow(!modalShow);
  }

  return (
    <div className="animate__animated animate__fadeIn">

    <ModalBox data={answer} open={modalShow}/>
    <Type02Box>

      <Type02Box__contaier>

        <TypeBtn>
          <Item1 onClick={SetTurn} className={active1 ? "animate__animated animate__bounceIn":""}>
            <ClickNumbr data-isClick={active1 ? "true" : "false"}>{ item1 }</ClickNumbr>
            <ThumbBox>
              <img id="0" data-isClick={active1 ? "true" : "false"}
              data-noActive={item1 == count - 1 ? "true" : "false"}
              src={require(`../../Asset/quiz/turn/${data.folder}/thumb1.png`)}></img>
            </ThumbBox>
          </Item1>
        </TypeBtn>

        <TypeBtn className={active2 ? "animate__animated animate__bounceIn":""}>
          <Item2 onClick={SetTurn}>
            <ClickNumbr data-isClick={active2 ? "true" : "false"}>{ item2 }</ClickNumbr>
            <ThumbBox>
              <img id="1" data-isClick={active2 ? "true" : "false"}
              data-noActive={item2 == count - 1 ? "true" : "false"}
              src={require(`../../Asset/quiz/turn/${data.folder}/thumb2.png`)}></img>
            </ThumbBox>
          </Item2>
        </TypeBtn>

      </Type02Box__contaier>

      <Type02Box__contaier>

        <TypeBtn className={active3 ? "animate__animated animate__bounceIn":""}>
          <Item3 onClick={SetTurn}>
            <ClickNumbr data-isClick={active3 ? "true" : "false"}>{ item3 }</ClickNumbr>
            <ThumbBox>
              <img id="2" data-isClick={active3 ? "true" : "false"}
              data-noActive={item3 == count - 1 ? "true" : "false"}
              src={require(`../../Asset/quiz/turn/${data.folder}/thumb3.png`)}></img>
            </ThumbBox>
          </Item3>
        </TypeBtn>

        <TypeBtn className={active4 ? "animate__animated animate__bounceIn":""}>
          <Item4 onClick={SetTurn}>
            <ClickNumbr data-isClick={active4 ? "true" : "false"}>{ item4 }</ClickNumbr>
            <ThumbBox>
              <img id="3" data-isClick={active4 ? "true" : "false"}
              data-noActive={item4 == count - 1 ? "true" : "false"}
              src={require(`../../Asset/quiz/turn/${data.folder}/thumb4.png`)}></img>
            </ThumbBox>
          </Item4>
        </TypeBtn>

      </Type02Box__contaier>

    </Type02Box>
    <AnswerBtn onClick={AnswerConfirmation}>解 答</AnswerBtn>
    </div>
  );
}


const Type02Box = styled.div`
  margin-bottom: 30px;
`
const Type02Box__contaier = styled.div`
  display: flex;
  justify-content: space-between;
`

const TypeBtn = styled.p`
  font-size: 2rem;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  a{
    display: block;
    width: 100%;
  }
`

const ClickNumbr = styled.span`
  position: absolute;
  top: 7%;
  left: 4%;
  background-color: #bfbfbf;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.5);
  color: #ffffff;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events:none;
  &[data-isClick='true']{
    color: #ffffff !important;
    background-color: #ff4c4c;
  }
`

const Item1 = styled.a`
  cursor: pointer;
  position: relative;
  z-index: 10;
  &[data-isClick='true']{
    pointer-events:none;
  }
  &[data-noActive='true']{
    pointer-events: auto !important;
  }
`
const Item2 = styled.a`
  cursor: pointer;
  &[data-isClick='true']{
    pointer-events:none;
  }
  &[data-noActive='true']{
    pointer-events: auto !important;
  }
`
const Item3 = styled.a`
  cursor: pointer;
  &[data-isClick='true']{
    pointer-events:none;
  }
  &[data-noActive='true']{
    pointer-events: auto !important;
  }
`
const Item4 = styled.a`
  cursor: pointer;
  &[data-isClick='true']{
    pointer-events:none;
  }
  &[data-noActive='true']{
    pointer-events: auto !important;
  }
`

const ThumbBox = styled.div`
  width: 100%;
  max-width: 360px;
  img{
    width: 100%;
    border-radius: 6px;
    box-shadow: 0px 3px 6px #e6e6e6;
    border: 2px solid #bfbfbf;
    &[data-isClick="true"]{
      border: 2px solid #ff4c4c;
      pointer-events:none;
    }
    &[data-noActive='true']{
      pointer-events: auto !important;
    }
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

export default QuizType02;
