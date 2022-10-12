import React, { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import Carousel from "../components/Carousel";
import { SliderData } from "../components/Carousel/SliderData";
import DownProgressArrow from "../components/DownProgressArrow/DownProgressArrow";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  // homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import TopInfoSec from "../components/InfoSection/TopInfoSec/topInfoSec";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <TopInfoSec {...homeObjOne} />
      <Services />
      <InfoSection {...homeObjTwo} />
      <AudioPlayer />
      <Carousel slides={SliderData} />
      <Footer />
      <DownProgressArrow />
    </>
  );
};

export default Home;
