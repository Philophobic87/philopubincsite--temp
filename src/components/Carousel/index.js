import React, { useState } from "react";
import {
  CarouselContainer,
  CarouselItems,
  CarouselWrapper,
  // Flicks,
  InnerCarousel,
  LeftArrow,
  RightArrow,
} from "./CarouselElements";
import { SliderData } from "./SliderData";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <CarouselContainer id="media">
        <CarouselWrapper>
          <InnerCarousel>
            <CarouselItems className="slider">
              <LeftArrow onClick={prevSlide} />
              <RightArrow onClick={nextSlide} />
              {SliderData.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide.image} alt={slide.alt} />
                    )}
                  </div>
                );
              })}
            </CarouselItems>
          </InnerCarousel>
        </CarouselWrapper>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
