import React from "react";
import * as S from "./styles";

const HomeSection2 = () => {
  return (
    <S.SectionContainer>
      <S.SectionHeader>New Arrivals</S.SectionHeader>
      <S.NewArrivalsCardContainer>
        <S.Card to="/shop" activeStyle>
          <S.CardText>BRAND 1</S.CardText>
        </S.Card>

        <S.Card to="/shop" activeStyle>
          <S.CardText>BRAND 2</S.CardText>
        </S.Card>

        <S.Card to="/shop" activeStyle>
          <S.CardText>BRAND 3</S.CardText>
        </S.Card>
      </S.NewArrivalsCardContainer>
    </S.SectionContainer>
  );
};

export default HomeSection2;
