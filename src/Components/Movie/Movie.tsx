import React, { useState } from 'react'

//画像
import pt01 from '../Asset/common/pt01.jpg'
import icon from '../Asset/character/icon.png'
import title from '../Asset/character/title.svg'

//コンポーネント
import HeaderLarge from '../CommonParts/HeaderLarge'
import Title from '../CommonParts/Title'
import Topbtn from '../CommonParts/Topbtn'
import MovieBox from './Parts/MovieBox'


//データ
import { MovieBoxData } from '../../Data/Movie/MovieBoxData'
import { kyoryuData } from '../../Data/Movie/MovieSlideData'
import { kaitakuData } from '../../Data/Movie/MovieSlideData'

//ライブラリ
import styled from 'styled-components';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';



const Movie:React.FC = () =>  {


  return (
    <Background>
      <HeaderLarge />
      <Title icon={icon} titleImage={title} alt="藤子・F・不二雄" />
      
      {/* 恐竜 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[0].id}
          folder={MovieBoxData[0].folder}
          title={MovieBoxData[0].title}
          thumb={MovieBoxData[0].thumb}
          alt={MovieBoxData[0].alt}
          slideData={kyoryuData}
        />
      </SelectMovie>

      {/* 開拓史 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[1].id}
          folder={MovieBoxData[1].folder}
          title={MovieBoxData[1].title}
          thumb={MovieBoxData[1].thumb}
          alt={MovieBoxData[1].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 大魔境 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[2].id}
          folder={MovieBoxData[2].folder}
          title={MovieBoxData[2].title}
          thumb={MovieBoxData[2].thumb}
          alt={MovieBoxData[2].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 海底鬼岩城 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[3].id}
          folder={MovieBoxData[3].folder}
          title={MovieBoxData[3].title}
          thumb={MovieBoxData[3].thumb}
          alt={MovieBoxData[3].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 魔界大冒険 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[4].id}
          folder={MovieBoxData[4].folder}
          title={MovieBoxData[4].title}
          thumb={MovieBoxData[4].thumb}
          alt={MovieBoxData[4].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 宇宙小戦争 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[5].id}
          folder={MovieBoxData[5].folder}
          title={MovieBoxData[5].title}
          thumb={MovieBoxData[5].thumb}
          thumb02={MovieBoxData[5].thumb02}
          alt={MovieBoxData[5].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 鉄人兵団 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[6].id}
          folder={MovieBoxData[6].folder}
          title={MovieBoxData[6].title}
          thumb={MovieBoxData[6].thumb}
          alt={MovieBoxData[6].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* 竜の騎士 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[7].id}
          folder={MovieBoxData[7].folder}
          title={MovieBoxData[7].title}
          thumb={MovieBoxData[7].thumb}
          thumb02={MovieBoxData[7].thumb02}
          alt={MovieBoxData[7].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太のパラレル西遊記 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[8].id}
          folder={MovieBoxData[8].folder}
          title={MovieBoxData[8].title}
          thumb={MovieBoxData[8].thumb}
          alt={MovieBoxData[8].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太の日本誕生 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[9].id}
          folder={MovieBoxData[9].folder}
          title={MovieBoxData[9].title}
          thumb={MovieBoxData[9].thumb}
          alt={MovieBoxData[9].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太とアニマル惑星 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[10].id}
          folder={MovieBoxData[10].folder}
          title={MovieBoxData[10].title}
          thumb={MovieBoxData[10].thumb}
          thumb02={MovieBoxData[10].thumb02}
          alt={MovieBoxData[10].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太のドラビアンナイト */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[11].id}
          folder={MovieBoxData[11].folder}
          title={MovieBoxData[11].title}
          thumb={MovieBoxData[11].thumb}
          thumb02={MovieBoxData[11].thumb02}
          alt={MovieBoxData[11].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太と雲の王国 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[12].id}
          folder={MovieBoxData[12].folder}
          title={MovieBoxData[12].title}
          thumb={MovieBoxData[12].thumb}
          thumb02={MovieBoxData[12].thumb02}
          alt={MovieBoxData[12].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太とブリキの迷宮 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[13].id}
          folder={MovieBoxData[13].folder}
          title={MovieBoxData[13].title}
          thumb={MovieBoxData[13].thumb}
          thumb02={MovieBoxData[13].thumb02}
          alt={MovieBoxData[13].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太と夢幻三剣士 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[14].id}
          folder={MovieBoxData[14].folder}
          title={MovieBoxData[14].title}
          thumb={MovieBoxData[14].thumb}
          thumb02={MovieBoxData[14].thumb02}
          alt={MovieBoxData[14].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太の創世日記 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[15].id}
          folder={MovieBoxData[15].folder}
          title={MovieBoxData[15].title}
          thumb={MovieBoxData[15].thumb}
          alt={MovieBoxData[15].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太と銀河超特急 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[16].id}
          folder={MovieBoxData[16].folder}
          title={MovieBoxData[16].title}
          thumb={MovieBoxData[16].thumb}
          alt={MovieBoxData[16].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太のねじ巻き都市冒険記 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[17].id}
          folder={MovieBoxData[17].folder}
          title={MovieBoxData[17].title}
          thumb={MovieBoxData[17].thumb}
          alt={MovieBoxData[17].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太の南海大冒険 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[18].id}
          folder={MovieBoxData[18].folder}
          title={MovieBoxData[18].title}
          thumb={MovieBoxData[18].thumb}
          alt={MovieBoxData[18].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太の宇宙漂流記 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[19].id}
          folder={MovieBoxData[19].folder}
          title={MovieBoxData[19].title}
          thumb={MovieBoxData[19].thumb}
          alt={MovieBoxData[19].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太の太陽王伝説 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[20].id}
          folder={MovieBoxData[20].folder}
          title={MovieBoxData[20].title}
          thumb={MovieBoxData[20].thumb}
          alt={MovieBoxData[20].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太と翼の勇者たち */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[21].id}
          folder={MovieBoxData[21].folder}
          title={MovieBoxData[21].title}
          thumb={MovieBoxData[21].thumb}
          alt={MovieBoxData[21].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太とロボット王国" */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[22].id}
          folder={MovieBoxData[22].folder}
          title={MovieBoxData[22].title}
          thumb={MovieBoxData[22].thumb}
          alt={MovieBoxData[22].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太とふしぎ風使い */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[23].id}
          folder={MovieBoxData[23].folder}
          title={MovieBoxData[23].title}
          thumb={MovieBoxData[23].thumb}
          thumb02={MovieBoxData[23].thumb02}
          alt={MovieBoxData[23].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      {/* のび太のワンニャン時空伝 */}
      <SelectMovie>
        <MovieBox
          id={MovieBoxData[24].id}
          folder={MovieBoxData[24].folder}
          title={MovieBoxData[24].title}
          thumb={MovieBoxData[24].thumb}
          alt={MovieBoxData[24].alt}
          slideData={kaitakuData}
        />
      </SelectMovie>

      <Topbtn />
    </Background>
  );
}



//セレクト
const SelectMovie = styled.div`
  position: relative;
  margin-bottom: 60px;
`

//共通プロパティ
const Background = styled.div`
  background-color: #f9fbfe;
  background-image: url('${pt01}');
  height: 100%;
`



export default Movie;
