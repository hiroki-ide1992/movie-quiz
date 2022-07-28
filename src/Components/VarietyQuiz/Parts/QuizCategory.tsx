import React, { useState } from 'react'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

type Props = {
  quizType: number
}

const QuizCategorys:React.FC<Props> = ( { quizType } ) =>  {
  
  return (
    <QuizCategory>
      {quizType == 1 ? "〇×問題":""}
      {quizType == 2 ? "順番問題":""}
      {quizType == 3 ? "映像問題":""}
      {quizType == 4 ? "多答問題":""}
    </QuizCategory>
  );
}

//クイズボックス
const QuizCategory = styled.h1`
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
`

export default QuizCategorys;
