import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 6rem 0 3rem 0;

  font-size: 45px;
  color: #b12225;
  height: 5rem;
  font-family: "Poppins", sans-serif;
`;

export const SectionContainer = styled.div`
  margin-bottom: 3.5rem;
  padding: 0;

  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background-color: white;
`;

export const NewArrivalsCardContainer = styled.div`
  display: flex;
  padding: 0 7rem;

  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-flow: column wrap;
    padding: 0px 20px;
  }
`;

export const Card = styled(Link)`
  height: 44rem;
  min-width: 30%;

  background-image: url("https://heneage.com/sites/default/files/styles/hero1024/public/2017-11/BANNER_BOOKS_1.jpg?h=3b69ef35&itok=cxgkf4F7");
  background-position-x: -650px;
  background-position-y: -300px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;

  padding: 10px;
  text-decoration: none;
`;

export const CardText = styled.div`
  color: white;
  font-size: 30px;
  padding: 10px;
  width: auto;
  margin-bottom: 3rem;

  font-family: "Poppins", sans-serif;
`;
