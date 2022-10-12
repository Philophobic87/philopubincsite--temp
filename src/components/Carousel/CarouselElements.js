import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 450px;
  overflow: hidden;
  background: #010606;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 480px;
  }
  @media screen and (max-width: 480px) {
    height: 400px;
  }
`;

export const CarouselWrapper = styled.div`
  padding: 10px;
  width: 100%;
`;

export const InnerCarousel = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const CarouselItems = styled.image`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  z-index: 1;
`;

export const ArrowContainer = styled.div``;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  left: 200px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
    left: 10px;
  }
  @media screen and (max-width: 480px) {
    left: 10px;
  }
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  right: 200px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
    right: 10px;
  }
  @media screen and (max-width: 480px) {
    right: 10px;
  }
`;

export const ImageWrapper = styled.div``;

export const Images = styled("slide")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

// export const Flicks = styled("slide")`
//   opacity: 1;
//   transition-duration: 1s ease;

//   &:active {
//     opacity: 0;
//     transition-duration: 1s;
//     transform: scale(1.08);
//   }
// `;
