import React, { useState } from 'react'

//画像
import backImage from '../../Asset/character/modal_topback.svg'

//ライブラリ
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap'




function ModalBox(props:any) {

  return (
    
    <Modal
      {...props}
      size="lg"
      centered
    >
      <ModalBox1>
        <ModalBox__close onClick={props.onHide}>×</ModalBox__close>
        <ModalBox__img>
          <img src={require(`../../Asset/character/list/${props.data.folder}/${props.data.img}`)} alt=""/>
        </ModalBox__img>
        <ModalBox__name>{props.data.name}</ModalBox__name>
        <ModalBox__hr></ModalBox__hr>
        <ModalBox__textBox>
          <ModalBox__title>{props.data.head01}</ModalBox__title>
          <ModalBox__txt dangerouslySetInnerHTML={{ __html: props.data.ex01 }}></ModalBox__txt>
        </ModalBox__textBox>
        </ModalBox1>
    </Modal>
  );
}

const ModalBox1 = styled.div`
  width: 100%;
  height: 680px;
  border-radius: 10px;
  background-image: url('${backImage}');
  background-color: #ffffff;
  background-repeat:no-repeat;
  background-size: contain;
  padding: 25px 0px;
  position: relative;
`
const ModalBox__close = styled.a`
  display: block;
  font-size: 2.8rem;
  line-height: 30px;
  color: #ffffff !important;
  border: 1px solid #ffffff;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
  position:absolute;
  top: 2%;
  right: 2.5%;
`
const ModalBox__img = styled.p`
  width:100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 15px;
  border: solid 4px #ffffff;
  img{
    width: 100%;
  }
`
const ModalBox__name = styled.p`
  color: #2b546a;
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.2em;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
`
const ModalBox__hr = styled.div`
  background-color: #ff6666;
  width: 100%;
  height: 6px;
  margin-bottom: 20px;
`
const ModalBox__textBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 280px;
  color: #2b546a;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 10px;
  }
  &::-webkit-scrollbar-track{
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #ccc;
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px #fff;
  }
`
const ModalBox__title = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.6em;
  text-align: left;
  padding-left: 8px;
  border-left: 4px solid #2b546a;
  margin-bottom: 16px;
`
const ModalBox__txt = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5em;
  text-align: left;
  padding-left: 8px;
`

export default ModalBox;
