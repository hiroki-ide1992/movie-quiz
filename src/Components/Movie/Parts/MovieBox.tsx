import React, { useState } from 'react'

//コンポーネント
import SlideItem from './SlideItem'

//タイプ
import { MovieSlideType } from '../../../Types/Movie/Type'

//ライブラリ
import styled from 'styled-components';



type Props = {
  id: number,
  folder: string,
  title: string,
  thumb: string,
  thumb02?: string,
  alt: string,
  slideData:MovieSlideType[]
}

const MovieBoxs:React.FC<Props> = ( { id, folder, title, thumb, thumb02, alt, slideData} ) => {

    const [isOpen, setOpen] = useState(false);

    return(
      <div>
        <MovieBox>
          <Movie>
            <Movie__inner onClick={() => setOpen(!isOpen)}>
              <Movie__thumb>
                <img src={require(`../../Asset/movie/list/${folder}/${thumb}`)} alt=""/>
                {
                  thumb02 ?
                    <Movie__thumb02 data-isOpen={isOpen ? 'true':'false'}>
                      <img src={require(`../../Asset/movie/list/${folder}/${thumb02}`)} alt=""/>
                    </Movie__thumb02>:""
                }
              </Movie__thumb>
              <Movie__title>
                <img src={require(`../../Asset/movie/list/${folder}/${title}`)} alt={alt}></img>
              </Movie__title>
              <SlideTrigger data-isOpen={isOpen ? 'true':'false'}>
                {isOpen ? '－':'＋'}
              </SlideTrigger>
            </Movie__inner>
          </Movie>
        </MovieBox>
        <SldieBox data-isOpen={isOpen ? 'true':'false'}>
          <MovieEx data-isOpen={isOpen ? 'true':'false'}>
            <SlideItem slideData={slideData}/>
          </MovieEx>
        </SldieBox>
      </div>
    )
}

const MovieBox = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: 20px;
`
const Movie = styled.div`
  background-color: #ffffff;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 4px 10px #eaeaea;
  cursor: pointer;
  position: relative;
  z-index: 1;
`
const Movie__inner = styled.a`
  display: flex;
  align-items: center;
`
const Movie__thumb = styled.div`
  width: 100%;
  max-width: 272px;
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  max-height: 118px;
  position: relative;
  img{
    width: 100%;
  }
`
const Movie__thumb02 = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  transition: 2s;
  &[data-isOpen='true'] {
    opacity: 1;
  }
`

const Movie__title = styled.h2`
  width: 100%;
  max-width: 215px;
  margin: 0 auto;
  img{
    width: 100%;
  }
`
const SlideTrigger = styled.button`
  width: 40px;
  height: 40px;
  background-color: #98e7ff;
  border-radius: 100px;
  text-align: center;
  line-height: 40px;
  font-size: 2.2rem;
  color: #ffffff;
  box-shadow: 0px 4px 6px #eaeaea;
  position: absolute;
  right: 4%;
  bottom: -15%;
  border:none;
  transition: .3s;
  cursor: pointer;
  &[data-isOpen='true'] {
    bottom: -400%;
  }
`

//スライド
const SldieBox  = styled.div`
  background-color: #ffffff;
  padding: 0px 0px 0px 0px;
  transform: translate(0px, -70px);
  height: 0px;
  transition: 0.3s;
  &[data-isOpen='true'] {
    padding: 80px 0px 30px 0px;
    height: 500px;
  }
`
const MovieEx = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: none;
  &[data-isOpen='true'] {
    display: block;
  }
`

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




export default MovieBoxs;
