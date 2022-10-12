import React, { useState, useEffect } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from "./topInfoSecElements";
import { Button } from "../../ButtonElement";

const TopInfoSec = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const showElement = () => {
    if (window.scrollY >= 400) {
      setElementIsVisible(true);
    } else {
      setElementIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showElement);
  }, []);

  // const observer = new IntersectionObserver((entries) => {
  //   const entry = entries[0];
  //   setElementIsVisible(entry.isIntersecting);
  // });
  // observer.observe(myRef.current);

  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.scrollY >= 700);
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // console.log(offset);

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <TextWrapper elementIsVisible={elementIsVisible}>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
              <Button
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                {buttonLabel}
              </Button>
            </BtnWrap>
          </TextWrapper>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default TopInfoSec;
