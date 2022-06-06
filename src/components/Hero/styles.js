import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-image: url("https://cdn.vox-cdn.com/thumbor/IAKtp2Nj7phAog_7BBohurabxyo=/0x154:3000x1842/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51938401/brownstone_stock.0.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 85vh;
  width: 100%;
`;

export const HeroTitle = styled.div`
  padding: 15px;

  /* background-color: grey; */
  min-height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  font-family: "Chewy", cursive;
  font-size: 150px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 80px;
  }
`;

export const HeroLink = styled(Link)`
  margin-top: 70px;
  font-weight: bold;
  text-decoration: none;
  font-size: 40px;
  color: white;
  font-family: "League Spartan", sans-serif;
`;
