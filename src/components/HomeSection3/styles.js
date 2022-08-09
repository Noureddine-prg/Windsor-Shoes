import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
  display: flex;

  height: 100vh;
  width: 100%;

  background-color: #112a4a;
`;

//Left Container Styles
export const LeftContainer = styled(Link)`
  height: 100%;
  width: 50%;
  background-color: black;
  padding: 60px;

  display: flex;
  align-items: flex-end;

  text-decoration: none;
  background-image: url("https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -400px;
`;

export const BestSellers = styled.div`
  width: 50px;
  font-size: 30px;
  color: #112a4a;

  font-family: "Poppins", sans-serif;
  font-weight: 1000;
`;

//Right container Styles
export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #112a4a;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 2.53rem;

  display: grid;
  grid-template-columns: 300px 300px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Cards = styled(Link)`
  background-color: #333;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;

  text-decoration: none;

  height: 300px;
  width: 300px;

  background-size: 400px 300px;
  background-repeat: no-repeat;

  &:nth-child(1) {
    //sneakers
    background-image: url("https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80");
    background-position-x: -35px;
  }
  &:nth-child(2) {
    //dress shoes
    background-image: url("https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc2hvZXN8ZW58MHx8MHx8&w=1000&q=80");
  }
  &:nth-child(3) {
    //boots
    background-image: url("https://c0.wallpaperflare.com/preview/136/524/52/brown-leather-work-boots.jpg");
    background-position-x: -45px;
  }
  &:nth-child(4) {
    //sandals
    background-image: url("https://media.istockphoto.com/photos/girl-legs-in-sandals-on-summer-vacation-picture-id1324705356?b=1&k=20&m=1324705356&s=170667a&w=0&h=Lxvd40VxlifY_pLX7Lo4tVii-7oaFwIjLbW85OFa5tM=");
  }

  transition: all 0.45s ease-in-out;
  &:hover {
    transform: scale(1.04);
    color: black;
    border: solid white 1px;
  }
`;
