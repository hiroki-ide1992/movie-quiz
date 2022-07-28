import React from 'react';
import styled from 'styled-components';

type Props = {
  icon: string,
  titleImage: string,
  alt: string
}


const Titles:React.FC<Props> = ( { icon, titleImage, alt } ) =>  {
  return (
    <TitleBox>
      <TitleBox__inner>
        <TitleIcon><img src={icon} alt=""/></TitleIcon>
        <Title><img src={titleImage} alt={alt}/></Title>
      </TitleBox__inner>
    </TitleBox>
  );
}

//タイトル
const TitleBox = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #eaeaea;
  margin-bottom: 60px;
`
const TitleBox__inner = styled.div`
  padding: 25px 0px;
`
const TitleIcon = styled.div`
  width: 100%;
  max-width: 55px;
  margin: 0 auto;
  margin-bottom: 20px;
  img{
    width: 100%;
  }
`
const Title = styled.h1`
  width: 100%;
  max-width: 204px;
  margin: 0 auto;
  img{
    width: 100%;
  }
`

export default Titles;
