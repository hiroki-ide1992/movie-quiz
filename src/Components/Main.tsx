import React from 'react';
import HeaderLarge from './CommonParts/HeaderLarge'
import pt01 from './Asset/common/pt01.jpg'
import item01_back from './Asset/main/item01_back.svg'
import item06_back from './Asset/main/item06_back.svg'
import generations_title from './Asset/main/generations_title.png'
import character__title from './Asset/main/character__title.svg'
import icon02 from './Asset/main/icon02.png'
import icon03 from './Asset/main/icon03.png'
import icon05 from './Asset/main/icon05.png'
import icon06 from './Asset/main/icon06.png'
import about__icon from './Asset/main/about__icon.svg'
import styled from 'styled-components';
import media from 'styled-media-query';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const Main:React.FC = () =>  {
  return (
    <Background>
      <HeaderLarge />
      <Grid>
        <Grid__item01 className="animate__animated animate__fadeIn">
        <Link to="./Movie">
          <Generations>
            <Generation__title>
              <img src={generations_title} alt=""></img>
            </Generation__title>
          </Generations>
        </Link>
        </Grid__item01>
        <Grid__item02 className="animate__animated animate__fadeIn">
          <Link to="./varietyquiztop">
          <Quiz>
            <Quiz__Title>映像もんだい</Quiz__Title>
            <Quiz__Icon>
              <img src={icon02} alt=""></img>
            </Quiz__Icon>
            <Quiz__leadBox>
              <Quiz__txt>これはなんの映画かな？<br></br>
              映画のシーンをみてこたえよう！</Quiz__txt>
            </Quiz__leadBox>
          </Quiz>
          </Link>
        </Grid__item02>
        <Grid__item03 className="animate__animated animate__fadeIn">
          <Quiz>
            <Quiz__Title>ドラえも～んだい</Quiz__Title>
            <Quiz__Icon>
              <img src={icon03} alt=""></img>
            </Quiz__Icon>
            <Quiz__leadBox>
              <Quiz__txt>のび太くんが映画のはじめに<br></br>
              さけぶこえで映画をこたえよう！</Quiz__txt>
            </Quiz__leadBox>
          </Quiz>
        </Grid__item03>
        <Grid__item04 className="animate__animated animate__fadeIn">
          <Link to="./about">
          <About>
            <About__Icon>
              <img src={about__icon} alt=""/>
            </About__Icon>
            <About__txt>
            このサイトの目的<br></br>
            なぜ生まれたのか？
            </About__txt>
          </About>
          </Link>
        </Grid__item04>
        <Grid__item05 className="animate__animated animate__fadeIn">
          <Quiz>
            <Quiz__Title>キャラクターあて</Quiz__Title>
            <Quiz__Icon>
              <img src={icon05} alt=""></img>
            </Quiz__Icon>
            <Quiz__leadBox>
              <Quiz__txt>映画に登場するゲストキャラや<br></br>
              道具のなまえをこたえよう！</Quiz__txt>
            </Quiz__leadBox>
          </Quiz>
        </Grid__item05>
        <Grid__item06 className="animate__animated animate__fadeIn">
          <Link to="./character">
          <Character>
            <Character__icon>
              <img src={icon06} alt=""/>
            </Character__icon>
            <Character__title>
              <img src={character__title} alt="藤子・F・不二雄のキャラクター"/>
            </Character__title>
            <Character__leadBox>
            <Character__txt>
              いつものキャラクター達や<br></br>
              映画に登場するゲストキャラや<br></br>
              敵キャラクターを紹介をするよ！
            </Character__txt>
          </Character__leadBox>
          </Character>
          </Link>
        </Grid__item06>
      </Grid>
    </Background>
  );
}


//Grid
const Grid = styled.div`
  width: 1250px;
  max-width: 1250px;
  padding: 0px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 290px 290px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:10px;
`
const Grid__item01 = styled.div`
  position: relative; grid-row: 1 / 2; grid-column: 1 / 3;
`
const Grid__item02 = styled.div`
  position: relative; grid-row: 2 / 3; grid-column: 1 / 2;
`
const Grid__item03 = styled.div`
  position: relative; grid-row: 2 / 3; grid-column: 2 / 3;
`
const Grid__item04 = styled.div`
  position: relative; grid-row: 1 / 2; grid-column: 3 / 4;
`
const Grid__item05 = styled.div`
  position: relative; grid-row: 2 / 3; grid-column: 3 / 4;
`
const Grid__item06 = styled.div`
  position: relative; grid-row: 1 / 3; grid-column: 4 / 5;
`

//GridBox
export const Grid__layout01 = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #e6e6e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  overflow: hidden;
  color: #2b546a;
  transition: .3s;
  &:hover{
    box-shadow: 0px 6px 10px #c2c2c2;
    transform: translate(-50%, -51%);
  }
`
export const Grid__layout02 = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #e6e6e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  overflow: hidden;
  color: #2b546a;
  transition: .3s;
  &:hover{
    box-shadow: 0px 6px 10px #c2c2c2;
    transform: translate(-50%, -51%);
  }
`
export const Grid__layout03 = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #e6e6e6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  overflow: hidden;
  color: #2b546a;
  transition: .3s;
  &:hover{
    box-shadow: 0px 6px 10px #c2c2c2;
    transform: translate(-50%, -51%);
  }
`

//各コンテンツ
const Generations = styled(Grid__layout01)`
  background-image: url(${item01_back});
  background-color: #98e7ff;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const Generation__title = styled.h2`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img{
    width: 100%;
  }
`

export const Quiz = styled(Grid__layout02)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  border:1px solid #ffffff;
`

const Quiz__Title = styled.h2`
  font-size: 1.9rem;
  font-weight: bold;
`
const Quiz__Icon = styled.div`
  width: 100%;
  max-width: 167px;
  margin: 0 auto;
  img{
    width: 100%;
  }
`
const Quiz__leadBox = styled.div`
`
const Quiz__txt = styled.p`
  font-size: 1.6rem;
  line-height: 1.6em;
`
const About = styled(Grid__layout02)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const About__Icon = styled.div`
  width: 100%;
  max-width: 38px;
  margin: 0 auto;
  margin-bottom: 10px;
  img{
    width:100%;
  }
`
const About__txt = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.6em;
`
const Character = styled(Grid__layout03)`
  background-image: url('${item06_back}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Character__title = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
const Character__icon = styled.div`
  width: 100%;
  max-width: 71px;
  margin: 0 auto;
  margin-bottom: 20px;
  img{
    width: 100%;
  }
`
const Character__leadBox = styled.div`
`
const Character__txt = styled.p`
  font-size: 1.6rem;
  line-height: 1.6em;
`

const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
`

export default Main;
