import React from "react";
import FeatureProductes from "../components/FeatureProduct";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
  const data = {
    name: "Dhara store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProductes/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
