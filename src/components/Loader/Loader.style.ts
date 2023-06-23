import styled from "@emotion/styled";

export const Circle = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #f54b55 transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
