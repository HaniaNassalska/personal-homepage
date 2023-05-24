import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./iconSpinner.svg";

const rotations = keyframes`
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;

export const IcoSpinner = styled(Spinner)`
  margin-top: 40px;
  max-width: 140px;
  animation: ${rotations} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 80px;
  }
`;
