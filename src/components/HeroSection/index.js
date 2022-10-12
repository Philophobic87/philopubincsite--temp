import React, { useState, useRef } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/P1090250.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const scrollRef = useRef();

  // const executeScroll = () =>
  //   scrollRef.current.scrollIntoView(true, {
  //     behavior: "smooth",
  //     block: "nearest",
  //   });
  // // run this function from an event handler or an effect to execute scroll

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>PHILOPHOBIA PUBLISHING INC.</HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button
            // ref={scrollRef}
            // onClick={executeScroll}
            to="wwa"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
