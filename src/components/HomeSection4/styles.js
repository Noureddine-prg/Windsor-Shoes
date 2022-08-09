import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;

  height: 80%;
  width: 100%;

  justify-content: space-around;
`;

export const Card = styled.div`
  flex: 3;
  margin: 0 3rem;
  display: flex;
  flex-direction: column;

  &:nth-child() {
  }

  &:nth-child() {
  }
`;

export const CardImage = styled.div`
  height: 90%;
  background-image: url(${(props) => props.selectedImage});
  background-size: cover;
  background-size: ${(props) => props.selectedSize || "cover"};
  background-repeat: no-repeat;
  background-position: center;
  position: ${(props) => props.selectedPosition || "static"};
`;

export const CardText = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
