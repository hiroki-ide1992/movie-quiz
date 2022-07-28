import React, { useState, useContext } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//画像
import backImage from '../../Asset/character/modal_topback.svg'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

type Props = {
  data: number,
  open: boolean
}


const ModalBox:React.FC<Props> = ( { data, open } ) => {

  const [next, setNext] = useContext(QuizCount);
  const [timeout, setTimeOut] = useContext(QuizCount);

  const NextBtn = () => {
    setNext(next + 1);
  }

  return (

    <Modal data-isModal={open ? "true":"false"}>
      
      <ModalInner className={open ? "animate__animated animate__fadeIn":""}>
      {data == 1?
        <Good>
          ◎<br></br>
          正解
        </Good>
      :""}
      {data == 2?
        <Bad>
          ×<br></br>
          不正解
        </Bad>
      :""}
      {
        next < 3 ? <Next onClick={NextBtn}>次の問題へ</Next>
        :<Next2><Link to="./varietyquiztop">おわり</Link></Next2>
      }
      </ModalInner>
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
  z-index: 1000;
  display:none;
  &[data-isModal="true"]{
    display: block;
  }
`

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  height: 300px;
  border-radius: 6px;
  background-color: #ffffff;
  background-repeat:no-repeat;
  background-size: contain;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Modaltext = styled.p`
  font-size: 7rem;
  font-weight: bold;
  line-height: 1.2em;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`
const Good = styled(Modaltext)`
  color: #ff4c4c;
`
const Bad = styled(Modaltext)`
  color: #0068b7;
`
const Next = styled.a`
  display: block;
  width: 100%;
  padding: 15px 0px;
  color: #2b546a !important;
  font-size: 2.6rem;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
  cursor: pointer;
`
const Next2 = styled.div`
  width: 100%;
  a{
    display: block;
    width: 100%;
    padding: 15px 0px;
    color: #2b546a !important;
    font-size: 2.6rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    background-color: #ffffff;
    cursor: pointer;
  }
`

export default ModalBox;
