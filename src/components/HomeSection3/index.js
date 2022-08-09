import React from "react";
import * as S from "./styles";

const HomeSection3 = () => {
  return (
    <S.SectionContainer>
      <S.LeftContainer to="/shop" activeStyle>
        <S.BestSellers>BEST SELLERS</S.BestSellers>
      </S.LeftContainer>

      <S.RightContainer>
        <S.CardContainer>
          <S.Cards to="/shop" activeStyle>
            Sneakers
          </S.Cards>

          <S.Cards to="/shop" activeStyle>
            Dress Shoes
          </S.Cards>

          <S.Cards to="/shop" activeStyle>
            Boots
          </S.Cards>

          <S.Cards to="/shop" activeStyle>
            Sandals
          </S.Cards>
        </S.CardContainer>
      </S.RightContainer>
    </S.SectionContainer>
  );
};

export default HomeSection3;
