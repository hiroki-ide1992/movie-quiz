import React from 'react';
import Line from './Asset/top/top_line.svg'
import Logo from './Asset/top/top_logo.png'
import Start from './Asset/top/top_start.png'
import styled from 'styled-components';
import media from 'styled-media-query';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const Top:React.FC = () =>  {
  return (
    <BackLine>
      <Container>
        <InformalBtn className="animate__animated animate__bounceInDown">非公式</InformalBtn>
        <LogoBox className="animate__animated animate__bounceInDown">
          <img src={Logo}></img>
        </LogoBox>

        <StartBtn className="animate__animated animate__bounceInDown">
          <Link to="./main">
            <img src={Start} alt="はじめる"></img>
          </Link>
        </StartBtn>

      </Container>
    </BackLine>
  );
}

const BackLine = styled.div`
  height: 100%;
  background-image:url('${ Line }');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`
const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
`
const InformalBtn = styled.div`
  border: 2px solid #0068b7;
  border-radius: 100px;
  color: #0068b7;
  width: 120px;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: bold;
  padding: 3px;
  margin-bottom: 40px;
`

const LogoBox = styled.div`
  width: 100%;
  max-width: 378px;
  margin: 0 auto;
  margin-bottom: 130px;
  img{
    width: 100%;
  }
`
const StartBtn = styled.div`
  img{
    cursor: pointer;
  }
`


export default Top;
