import styled from "styled-components";

export const ArrowContainer = styled.div`
  position: fixed;
  right: 50px;
  bottom: 90px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    right: 20px;
    bottom: 75px;
  }
  @media screen and (max-width: 480px) {
    right: 20px;
    bottom: 75px;
  }
`;
export const ArrowWrapper = styled.div`
  //   display: flex;
`;
export const ArrowButton = styled.div`
  //   display: flex;
`;
export const Arrow = styled.div`
  //   display: flex;
`;
export const ButtonWrapper = styled.div`
  //   display: flex;
`;

// export const BiChevronDownCircle = styled("bx-ChevronDownCircle")`
//   cursor: pointer;
//   border: 1px solid green;

//   &:hover {
//     transition: transform 0.3s;
//   }
// `;
