import React, { useState } from 'react'

//画像
import pt01 from '../Asset/common/pt01.jpg'

//コンポーネント
import HeaderLarge from '../CommonParts/HeaderLarge'
import Title from '../CommonParts/Title'
import Topbtn from '../CommonParts/Topbtn'


//データ


//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';



const VarietyQuizTop:React.FC = () =>  {


  return (
    <Background>
      <HeaderLarge />
      <SelectQuiz>
        <SlectQuizBtn>
        <Link to="./varietyquizmain">
         はじめる
         </Link>
        </SlectQuizBtn>
      </SelectQuiz>
      <SelectQuiz>
        <HowPlayBtn>
          あそびかた
        </HowPlayBtn>
      </SelectQuiz>

      <SelectQuiz>
        <Attention>
          <Attention__inner>

            <AttentionTitle>注意事項</AttentionTitle>
            <AttentionList>
              <AttentionList__item>※ クイズの内容は「のび太のワンニャン時空伝」までを対象として制作しています</AttentionList__item>
              <AttentionList__item>※ 「ドラえもん ぼく、桃太郎のなんなのさ」はクイズの対象、クイズの内容、ともに対象外です</AttentionList__item>
              <AttentionList__item>※ 文字数の関係上、映画タイトル冒頭の「映画 ドラえもん」の部分は記載しておりません</AttentionList__item>

            </AttentionList>
          
          </Attention__inner>
        </Attention>
      </SelectQuiz>
      <Topbtn />
    </Background>
  );
}


//セレクトクイズ
const SelectQuiz = styled.section`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 60px;
  justify-content: space-around;
`
const SlectQuizBtn = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
  background-color: #ffffff;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #e6e6e6;
`
const HowPlayBtn = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background-color: #ffffff;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  border-radius: 100px;
  box-shadow: 0px 3px 6px #e6e6e6;
`
const Attention = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #e6e6e6;
`
const Attention__inner = styled.div`
  padding: 30px;
`
const AttentionTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 25px;
`
const AttentionList = styled.ul`
  text-align: left;
`
const AttentionList__item = styled.li`
  margin-bottom: 15px;
`



//共通プロパティ
const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
  color: #2b546a;
  font-size: 1.6rem;
`



export default VarietyQuizTop;
