import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeShopContainer = styled.div`
  margin: 0;
  padding: 5rem 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #112a4a;
  width: 100%;
  min-height: 100.5vh;

  @media screen and (max-width: 768px) {
    height: 110vh;
    padding-bottom: 5rem;
  }
`;

//change to poppins light.
export const SectionHeader = styled.div`
  color: white;
  margin-bottom: 5rem;

  font-size: 30px;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const CardContainer = styled.div`
  width: 80%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  flex: 3;
  height: 35rem;

  margin: 20px;
`;

export const Title = styled.h1`
  display: flex;
  width: 40%;
  height: 10%;
`;

//Change to poppins med.
export const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column-reverse;
  background-position: center;

  text-decoration: none;
  color: white;

  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3px;

  transition: all 0.45s ease-in-out;

  &:hover {
    transform: scale(1.04);
    color: black;
    border: solid white 1px;
  }
`;

//change to poppins light
export const CardText = styled.div`
  display: flex;
  height: 20%;
  margin-top: 30px;

  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;
