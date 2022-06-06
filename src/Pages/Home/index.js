import React from "react";
import Hero from "../../components/Hero/index";
import HomeSection1 from "../../components/HomeSection1/index";
import HomeSection2 from "../../components/HomeSection2/index";
import "./styles";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSection1 />
      <HomeSection2 />
    </>
  );
};

export default Home;
