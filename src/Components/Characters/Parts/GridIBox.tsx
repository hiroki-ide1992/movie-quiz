import React, { useState, useEffect } from 'react'
import Slider from "react-slick";

//タイプ
import { CharaListType } from '../../../Types/Characters/Type'

//データ
import { ModalBoxData } from '../../../Data/Characters/ModalBoxData'
import { ModalBoxData2 } from '../../../Data/Characters/ModalBoxData2'

//コンポーネント
import ModalBox from './ModalBox'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'


type Props = {
  data: CharaListType[],
  modalNumber: number
}

const GridBoxs:React.FC<Props> = ( { data, modalNumber } ) => {

    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(0);

    const modalGenerate = (e:any) => {
      let i = e.target.id;
      console.log(i);
      setModalData(i);
      setModalShow(true);
    }

    return(
      <GridBox>
      
      {modalNumber == 1 ?
        <ModalBox
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={ModalBoxData[modalData]}
        />
        :
        <ModalBox
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={ModalBoxData2[modalData]}
        />
      }

        

        {
          data.map((item) => (
          item.img === "title.svg" ?

            <GridBox__itemTitle>
              <MovieTitle>
                <img src={require(`../../Asset/character/list/${item.folder}/${item.img}`)}></img>
              </MovieTitle>
            </GridBox__itemTitle>
            :
            <GridBox__item>
              <a onClick={modalGenerate}>
                <Character>
                  <Character__img><img id={`${item.id}`} src={require(`../../Asset/character/list/${item.folder}/${item.img}`)} alt=""/></Character__img>
                </Character>
              </a>
            </GridBox__item>

          ))
        }
      </GridBox>
  )
}


//グリッド
const GridBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-rows: 95px auto;
  grid-template-columns: 146px 146px 146px 146px 146px 146px;
`
const GridBox__item = styled.div`
  transition: .2s;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 10px #eaeaea;
  img{
    width: 100%;
  }
  &:hover{
    transform: translateY(-5px);
    box-shadow: 0px 8px 10px #989898;
  }
`
const GridBox__itemTitle = styled(GridBox__item)`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: span 2;
  grid-row: span 2;
  background-color: #ffffff;
  padding: 0 25px;
  &:hover{
    transform: translateY(0px);
    box-shadow: 0px 4px 10px #eaeaea;
  }
`
const MovieTitle = styled.div`
`

//キャラクター
const Character = styled.div`
  height: 95px;
  border-radius: 3px;
  box-shadow: 0px 3px 6px #eaeaea;
  cursor: pointer;
`
const Character__img = styled.p`
  img{
    width: 100%;
    border-radius: 3px;
  }
`

export default GridBoxs;
