import React from "react";
import Icon1 from "../../images/svg-11.svg";
import Icon2 from "../../images/svg-12.svg";
import Icon3 from "../../images/svg-13.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Writing</ServicesH2>
            <ServicesP>
              We're obsessive writers and are always up for collaboration.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Production</ServicesH2>
            <ServicesP>
              We have a stellar in-house producer who's ready to push the
              boundaries.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Photo/Video</ServicesH2>
            <ServicesP>
              Book us for your next photoshoot or guerilla-style video.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
