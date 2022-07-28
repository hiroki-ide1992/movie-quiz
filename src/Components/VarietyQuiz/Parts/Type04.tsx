import React, { useState, useContext } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//コンポーネント
import ModalBox from './ModalBox'

//タイプ
import { manyType } from '../../../Types/Quiz/Type'

//ライブラリ
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';


type Props = {
  data:manyType
}

const QuizType01:React.FC<Props> = ( { data }) =>  {

  const [modalShow, setModalShow] = useState(false);
  const [answer, setAnswer] = useState(2);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const [active5, setActive5] = useState(0);
  const [active6, setActive6] = useState(0);

  const ClickBtn = (e:any) => {
    let i = e.target.id;
    let d = e.target.getAttribute('data-isClick');

    if(i == 1 && d == "false"){
      setActive1(i);
    }else if(i == 2 && d == "false"){
      setActive2(i);
    }else if(i == 3 && d == "false"){
      setActive3(i);
    }else if(i == 4 && d == "false"){
      setActive4(i);
    }else if(i == 5 && d == "false"){
      setActive5(i);
    }else if(i == 6 && d == "false"){
      setActive6(i);
    }else if(i == 1 && d == "true"){
      setActive1(0);
    }else if(i == 2 && d == "true"){
      setActive2(0);
    }else if(i == 3 && d == "true"){
      setActive3(0);
    }else if(i == 4 && d == "true"){
      setActive4(0);
    }else if(i == 5 && d == "true"){
      setActive5(0);
    }else if(i == 6 && d == "true"){
      setActive6(0);
    }
  }

  const AnswerSubmit = () => {
    let a = {aa:`${active1}${active2}${active3}${active4}${active5}${active6}`};
    data.answer == a.aa ? setAnswer(1):setAnswer(2);
    setModalShow(!modalShow);
  }


  return (
    <div className="animate__animated animate__fadeIn">

    <ModalBox data={answer} open={modalShow}/>
    <Type04Box>

      <Type04Box__contaier>
        <TypeBtn className={active1 == 1 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="1" data-isClick={ active1 == 1 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb1.png`)}></img>
          </a>
        </TypeBtn>

        <TypeBtn className={active2 == 2 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="2" data-isClick={ active2 == 2 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb2.png`)}></img>
          </a>
        </TypeBtn>

        <TypeBtn className={active3 == 3 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="3" data-isClick={ active3 == 3 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb3.png`)}></img>
          </a>
        </TypeBtn>
      </Type04Box__contaier>
      <Type04Box__contaier>
        <TypeBtn className={active4 == 4 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="4" data-isClick={ active4 == 4 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb4.png`)}></img>
          </a>
        </TypeBtn>

        <TypeBtn className={active5 == 5 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="5" data-isClick={ active5 == 5 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb5.png`)}></img>
          </a>
        </TypeBtn>
        <TypeBtn className={active6 == 6 ? "animate__animated animate__bounceIn":""}>
          <a onClick={ClickBtn}>
            <img id="6" data-isClick={ active6 == 6 ? "true" : "false"} src={require(`../../Asset/quiz/many/${data.folder}/thumb6.png`)}></img>
          </a>
        </TypeBtn>
      </Type04Box__contaier>


    </Type04Box>
    <AnswerBtn onClick={AnswerSubmit}>解 答</AnswerBtn>
    </div>
  );
}


const Type04Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 30px;
`
const Type04Box__contaier = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const TypeBtn = styled.p`
  width: 30%;
  cursor: pointer;
  img{
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 6px #e6e6e6;
    border: 2px solid #bfbfbf;
    transition: .1s;
    &[data-isClick="true"]{
      border: 2px solid #ff4c4c;
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


export default QuizType01;
