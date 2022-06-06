import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  color: red;

  height: 5rem;
`;

export const SectionContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;
  min-height: 100vh;

  background-color: black;
`;

export const NewArrivalsCardContainer = styled.div`
  display: flex;
  padding: 20px 40px;

  justify-content: space-between;
  background-color: white;
`;

export const Card = styled(Link)`
  height: 45rem;
  width: 30%;
  background: grey;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column-reverse;

  border: solid;
  padding: 30px;
  text-decoration: none;
`;

export const CardText = styled.div`
  color: white;
  font-size: 17px;
  background-color: blue;
  width: 5rem;
`;
