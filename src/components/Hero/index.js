import React from "react";
import * as S from "./styles";

const Hero = () => {
  return (
    <>
      <S.HeroContainer>
        <S.HeroTitle>Windsor Shoes</S.HeroTitle>
        <S.HeroLink to="/shop" activeStyle>
          SHOP NOW
        </S.HeroLink>
      </S.HeroContainer>
    </>
  );
};

export default Hero;
