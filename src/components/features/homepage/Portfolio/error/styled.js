import styled from "styled-components";
import { Paragraph } from "../styled";
import { ReactComponent as Danger } from "./danger.svg";
import { ReactComponent as GoToHitHub } from "./goToGitHub.svg";
import { ReactComponent as GoToHitHubDM } from "./goToGitHubDM.svg";
export const DangerIco = styled(Danger)`
`;

export const H3Header = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
`;

export const ErrorParagraph = styled(Paragraph)`
margin-bottom: 32px;
@media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-bottom: 10px;
   };

`

export const GoToIco = styled(GoToHitHub)`
  transition: 0.5s;
  &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   };
  `;

export const GoToIcoDM = styled(GoToHitHubDM)`
  transition: 0.5s;
  &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   };
`;

export const GitHubLink = styled.a`
`;
