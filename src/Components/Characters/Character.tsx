import React, { useState, useEffect } from 'react'

//画像
import pt01 from '../Asset/common/pt01.jpg'
import icon from '../Asset/character/icon.png'
import title from '../Asset/character/title.svg'


//コンポーネント
import HeaderLarge from '../CommonParts/HeaderLarge'
import Title from '../CommonParts/Title'
import Topbtn from '../CommonParts/Topbtn'
import GridBox from './Parts/GridIBox'


//データ
import { GridBoxData } from '../../Data/Characters/GridBoxData'
import { GridBoxData2 } from '../../Data/Characters/GridBoxData2'


//ライブラリ
import styled, { css } from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';




const Character:React.FC = () =>  {

    const [modalShow, setModalShow] = useState(false);
    const [btnSelect, setBtnSlect] = useState(true);

    const GridChange = () => {
      setBtnSlect(!btnSelect);
    }

  return (
    <Background>
      <HeaderLarge />
      <Title icon={icon} titleImage={title} alt="藤子・F・不二雄" />

      <MenuBox>
        <MenuBox__inner>
          <MenuBtn onClick={GridChange} data-btn={btnSelect ? 'true' : 'false'}>前半</MenuBtn>
          <MenuBtn onClick={GridChange} data-btn={btnSelect ? 'false' : 'true'}>後半</MenuBtn>
        </MenuBox__inner>
      </MenuBox>
      <CharacterBox>
        <CharacterBox__inner>
          {
            btnSelect == true ? <GridBox modalNumber={1} data={GridBoxData}/>:<GridBox modalNumber={2} data={GridBoxData2}/>
          }
        </CharacterBox__inner>
      </CharacterBox>
        <MenuBox>
        <MenuBox__inner>
          <MenuBtn onClick={GridChange} data-btn={btnSelect ? 'true' : 'false'}>前半</MenuBtn>
          <MenuBtn onClick={GridChange} data-btn={btnSelect ? 'false' : 'true'}>後半</MenuBtn>
        </MenuBox__inner>
      </MenuBox>
      <Topbtn />
    </Background>
  );
}


//メニューボックス
const MenuBox = styled.div`
  width: 100%;
  max-width: 1018px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 60px;
`
const MenuBox__inner = styled.div`
  display: flex;
  justify-content: space-around;
`
const MenuBtn = styled.a`
  display: block;
  background-color: #2C556B;
  color: #ffffff !important;
  font-size: 3rem;
  width: 312px;
  box-shadow: 0px 4px 10px #eaeaea;
  padding: 20px;
  border-radius: 3px;
  pointer-events: none;
  &[data-btn='false']{
    background-color: #ffffff;
    color: #2C556B !important;
    pointer-events: auto;
    cursor: pointer;
  }
`


//キャラクター
const CharacterBox =  styled.section`
  width: 100%;
  max-width: 1018px;
  margin: 0 auto;
  margin-bottom: 80px;
`
const CharacterBox__inner =  styled.div`
  padding: 0 20px;
`

//共通プロパティ
const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
`
export default Character;
