import React, { useState, useContext } from 'react'
import { QuizCount } from '../VarietyQuizMain'

//タイプ
import { maruBatuType } from '../../../Types/Quiz/Type'
import { turnType } from '../../../Types/Quiz/Type'
import { videoType } from '../../../Types/Quiz/Type'
import { manyType } from '../../../Types/Quiz/Type'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

type Props = {
  maruBatu?: maruBatuType,
  turn?: turnType,
  video?: videoType,
  many?: manyType,
  current: number
}



const QuizCategorys:React.FC<Props> = ( { maruBatu, turn, video, many, current} ) =>  {

  return (
    <QuizContent className="animate__animated animate__fadeIn">
      <QuizContent__inner>
      <QuizCurrent>{current}/4</QuizCurrent>
        <QuizTitle>問題</QuizTitle>
        {
          video?.category == "video" ?
          <QuizVideo>
            <img src={require(`../../Asset/quiz/video/${video?.thumb}`)} alt=""/>
          </QuizVideo>
          :""
        }
        {
          many?.category == "many" ?
          <QuizTitle2>
            {many?.title}
          </QuizTitle2>
          :""
        }
        <QuizTextBox>
          <QuizText>
          {maruBatu?.text}
          </QuizText>
          <QuizText2>
          {video?.text}
          {many?.text}
          {turn?.text}
          </QuizText2>
        </QuizTextBox>
      </QuizContent__inner>
    </QuizContent>
  );
}

//クイズボックス
const QuizContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #e6e6e6;
  border-radius: 4px;
`
const QuizContent__inner = styled.div`
  padding: 30px 60px;
`
const QuizCurrent = styled.div`
  margin-bottom: 5px;
`
const QuizVideo = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 20px;
  img{
    width: 100%;
    border-radius: 15px;
  }
`
const QuizTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
`
const QuizTitle2 = styled.h2`
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 30px;
`
const QuizTextBox = styled.div`
`
const QuizText = styled.p`
  font-size: 1.8rem;
  line-height: 1.6em;
  text-align: left;
`
const QuizText2 = styled.p`
  font-size: 1.8rem;
  line-height: 1.6em;
  text-align: center;
`
const QuizProgress = styled.progress`
`


export default QuizCategorys;
