import React, { useEffect, useState } from 'react';
import topbtn from '../Asset/common/topbtn.svg'
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';




const Topbtn:React.FC = () =>  {

  const [isTop, setIsTop] = useState<boolean>(false);

  const onScroll = (): void => {
    const PageY = window.scrollY;
    if(PageY >= 400){
      setIsTop(true);
    }else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });


  return (
    <Btn className={`animate__animated animate__bounceIn`} data-isOpen={isTop ? true: false}  id="Topbtn">
      <a href="javascript:void(0);" onClick={() => window.scrollTo(0, 0)}>
        <img src={topbtn}></img>
      </a>
    </Btn>
  );
}

const Btn = styled.div`
  position: fixed;
  bottom: 5%;
  right: 6%;
  width: 100%;
  max-width: 76px;
  z-index: 2000;
  cursor: pointer;
  display: none;
  &[data-isOpen='true'] {
    display: block;
  }
  img{
    width: 100%;
  }
`

export default Topbtn;
