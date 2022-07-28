import React from 'react';
import main_logo from '../Asset/main/main_logo.png'
import styled from 'styled-components';
import media from 'styled-media-query';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

const HeaderLarge:React.FC = () =>  {
  return (
    <Header>
      <Header__inner>
        <Link to="/">
          <Logo>
            <img src={main_logo} alt="ドラえもんクイズ大冒険"></img>
          </Logo>
        </Link>
      </Header__inner>
    </Header>
  );
}

const Header = styled.header`
  border-top: 6px solid #0068b7;
  box-shadow: 0px 4px 10px #eaeaea;
  background-color: #ffffff;
  margin-bottom: 80px;
`
const Header__inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.3% 0%;
`
const Logo = styled.h2`
  width: 100%;
  max-width: 450px;
  img{
    width: 100%;
  }
`

export default HeaderLarge;
