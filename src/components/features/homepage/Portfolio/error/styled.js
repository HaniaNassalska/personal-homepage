import styled from "styled-components";
import { ReactComponent as Danger } from "./danger.svg";
import { ReactComponent as GoToHitHub } from "./goToGitHub.svg";

export const DangerIco = styled(Danger)`
`;

export const H3Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const GoToIco = styled(GoToHitHub)`
  margin-top: 32px;   
  max-width: 150px;
  &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   };
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 10px;
   };
`;

export const GitHubLink = styled.a`
`;
