import React, { useState } from 'react'

//画像
import pt01 from '../Asset/common/pt01.jpg'
import icon from '../Asset/character/icon.png'
import title from '../Asset/character/title.svg'

//コンポーネント
import HeaderLarge from '../CommonParts/HeaderLarge'
import Title from '../CommonParts/Title'
import Topbtn from '../CommonParts/Topbtn'


//データ


//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';



const About:React.FC = () =>  {


  return (
    <Background>
      <HeaderLarge />

      <AboutBox>
        <AboutBox__inner>

          <AboutIcon>
            <img src={require(`../Asset/about/top_icon.svg`)} alt=""/>
          </AboutIcon>
          <AboutTitle>
            このサイトの目的、なぜ生まれたか？
          </AboutTitle>
          <AboutTextBox>
            <AboutText>
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            テキストがはいります。テキストがはいります。テキストがはいります。テキストがはいります。
            </AboutText>
          </AboutTextBox>
        </AboutBox__inner>
      </AboutBox>


      <Topbtn />
    </Background>
  );
}


//アバウト
const AboutBox = styled.section`
  background-color: #ffffff;
  width: 1080px;
  margin: 0 auto;
  box-shadow: 0px 4px 10px #eaeaea;
  border-radius: 3px;
  color: #2b546a;
  font-size: 1.6rem;
`
const AboutBox__inner = styled.div`
  padding: 30px;
`
const AboutTitle = styled.h1`
  font-size:1.8rem;
  font-weight: bold;
  line-height: 2.5em;
  margin-bottom: 20px;
`
const AboutIcon = styled.div`
  width: 100%;
  max-width: 25px;
  margin: 0 auto;
  img{
    width: 100%;
  }
`
const AboutTextBox = styled.div`
  width: 90%;
  margin: 0 auto;
`
const AboutText = styled.div`
  font-size: 1.6rem;
  line-height: 1.8em;
`


//共通プロパティ
const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
`

export default About;
