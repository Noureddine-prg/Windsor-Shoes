import React from "react";
import * as S from "./styles";

const HomeSection4 = () => {
  return (
    <S.SectionContainer>
      <S.CardContainer>
        <S.Card>
          <S.CardImage
            style={{ backgroundPosition: "center" }}
            selectedSize="250px 250px"
            selectedImage="https://www.pngall.com/wp-content/uploads/6/Comic-Bubble-Speech-PNG-Pic.png"
          ></S.CardImage>
          <S.CardText style={{ marginBottom: "" }}>
            10 AM - 7 PM MONDAYS TO SATURDAYS <br />
            12 AM - 5 PM Sundays
          </S.CardText>
        </S.Card>

        <S.Card>
          <S.CardImage selectedImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80"></S.CardImage>
          <S.CardText>
            484 5th Ave <br />
            Brooklyn, New York <br />
            (718) 369 3700
          </S.CardText>
        </S.Card>

        <S.Card>
          <S.CardImage selectedImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&w=1000&q=80"></S.CardImage>
          <S.CardText>
            233 Prospect Park West <br />
            Brooklyn, New York <br />
            (718) 369 2192
          </S.CardText>
        </S.Card>
      </S.CardContainer>
    </S.SectionContainer>
  );
};

export default HomeSection4;
