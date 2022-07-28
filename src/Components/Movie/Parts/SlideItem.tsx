import React, { useState } from 'react'

//タイプ
import { MovieSlideType } from '../../../Types/Movie/Type'

//ライブラリ
import Slider from "react-slick";
import styled from 'styled-components';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false
};

type Props = {
  slideData:MovieSlideType[]
}


const SlideItems:React.FC<Props> = ( { slideData } ) => {


    return(
      <Slider {...settings}>

        {
          slideData.map((item) => (
            
            item.role == "int" ?
            <Intro>
              <Hero>
                <img src={require(`../../Asset/movie/list/${item.folder}/${item.thumb}`)} alt="" />
              </Hero>
              <TextBox1>
                <Head01>あらすじ</Head01>
                <Text dangerouslySetInnerHTML={{ __html: item.text }}></Text>
              </TextBox1>
            </Intro>
            :item.role == "hei1" ?
            <Highlight>
              <Hero>
                <img src={require(`../../Asset/movie/list/${item.folder}/${item.thumb}`)} alt="" />
              </Hero>
              <TextBox1>
                <Head01>見どころ</Head01>
                <Text dangerouslySetInnerHTML={{ __html: item.text }}></Text>
              </TextBox1>
            </Highlight>
            :
            <Highlight>
              <TextBox2>
                <Head01>見どころ</Head01>
                <Text>{item.text}</Text>
              </TextBox2>
            </Highlight>
          ))
        }
      </Slider>
    )
}



const MovieEx__inner = styled.div`
  color: #2b546a;
  display: flex !important;
  justify-content: space-between;
`

const Intro = styled(MovieEx__inner)`
`
const Hero = styled.div`
  width: 100%;
  max-width: 250px;
  img{
    width: 100%;
  }
`
const TextBox1 = styled.div`
  width: 65%;
  overflow: hidden;
  text-align:left;
  padding: 15px 0px;
`
const TextBox2 = styled.div`
  width: 100%;
  overflow: hidden;
  text-align:left;
  padding: 15px 0px;
`
const Head01 = styled.h3`
  font-size: 2rem;
  padding-left: 0.3em;
  border-left: 3px solid #2b546a;
  line-height: 1.2em;
  font-weight: bold;
  margin-bottom: 1em;
`
const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6em;
`
const Text__emInline = styled.span`
  font-style: italic;
  font-weight: bold;
`
const Text__emBlock = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 3em;
`

const Highlight = styled(MovieEx__inner)`

`




export default SlideItems;
