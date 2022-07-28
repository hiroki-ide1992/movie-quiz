import React, { useState } from 'react'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';



const AnswerBtns:React.FC = () =>  {
  
  return (
    <AnswerBtn>解 答</AnswerBtn>
  );
}

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

export default AnswerBtns;
