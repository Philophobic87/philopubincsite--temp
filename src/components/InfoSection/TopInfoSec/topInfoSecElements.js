import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ elementIsVisible }) => (elementIsVisible ? "1" : "0")};
  transition: 2s;

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const TopLine = styled.p`
  color: #ff0707;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  text-align: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  align-items: center;
`;
