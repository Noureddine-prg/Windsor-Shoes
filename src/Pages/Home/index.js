import React from "react";
import Hero from "../../components/Hero/index";
import HomeSection1 from "../../components/HomeSection1/index";
import HomeSection2 from "../../components/HomeSection2/index";
import HomeSection3 from "../../components/HomeSection3/index";
import HomeSection4 from "../../components/HomeSection4/index";
import "./styles";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </>
  );
};

export default Home;
