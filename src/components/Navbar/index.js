import React from "react";
import * as S from "./styles";

const Navbar = () => {
  return (
    <>
      <S.Nav>
        <S.NavMenu>
          <S.NavLink to="/">Home</S.NavLink>

          <S.NavLink to="/shop/women" activeStyle>
            Women
          </S.NavLink>

          <S.NavLink to="/shop/men" activeStyle>
            Men
          </S.NavLink>

          <S.NavLink to="/shop/children" activeStyle>
            Children
          </S.NavLink>

          <S.NavLink to="/shop/about-us" activeStyle>
            About Us
          </S.NavLink>

          <S.NavLink to="/shop/sign-up" activeStyle>
            Sign Up
          </S.NavLink>
        </S.NavMenu>

        <S.Bars />

        <S.NavLogo>
          <img></img>
        </S.NavLogo>
      </S.Nav>
    </>
  );
};

export default Navbar;
