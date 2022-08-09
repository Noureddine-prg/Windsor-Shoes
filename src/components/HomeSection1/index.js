import React from "react";
import * as S from "./styles";

const HomeSection1 = () => {
  return (
    <S.HomeShopContainer>
      <S.SectionHeader>
        <h1>SHOP</h1>
      </S.SectionHeader>

      <S.CardContainer>
        <S.Card>
          <S.CardLink
            to="/shop"
            activeStyle
            style={{
              backgroundPositionY: `-104px`,
              backgroundImage: `url("https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80")`,
            }}
          >
            <S.Title>WOMEN</S.Title>
          </S.CardLink>
          <S.CardText>
            Award-winning, imported brands, in a wide range of sizes and styles.
            From heels to boots to sneakers we have it all.
          </S.CardText>
        </S.Card>

        <S.Card>
          <S.CardLink
            to="/shop"
            activeStyle
            style={{
              backgroundImage: `url("https://media.istockphoto.com/photos/young-man-shopping-shoes-picture-id1292261872?b=1&k=20&m=1292261872&s=170667a&w=0&h=AA5F-5LPlJJjqpUqB5UjCuYhk5YnNEEcEAqa5Ya4lEA=")`,
            }}
          >
            <S.Title>MEN</S.Title>
          </S.CardLink>

          <S.CardText>
            Top athletic brands and boots built tougher than they need to be.
            Now avaliable in wide widths!
          </S.CardText>
        </S.Card>

        <S.Card>
          <S.CardLink
            to="/shop"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80")`,
            }}
          >
            <S.Title>CHILDREN</S.Title>
          </S.CardLink>

          <S.CardText>
            Whether your little one is taking their first steps, needs their
            first pair of school shoes, or has just outgrown their old shoes, we
            have the perfect pair for them.
          </S.CardText>
        </S.Card>
      </S.CardContainer>
    </S.HomeShopContainer>
  );
};

export default HomeSection1;
