import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #112a4a;
  height: 15vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  z-index: 999;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;

  text-decoration: none;
  padding: 0 0.7rem;
  height: 40px;
  font-size: 30px;
  cursor: pointer;
  align-items: flex-end;
  border-right: 2.5px solid white;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  white-space: nowrap;

  &:nth-child(6) {
    border-right: none;
  }

  &:hover {
    color: grey;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 3;
  align-items: flex-end;

  /* Menu/Links will disappear at this width */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLogo = styled.div`
  padding-left: 1rem;
  width: 15vw;
  background: black;
`;

// Mobile responsiveness
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width) {
    display: block;
    position: absolue;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
