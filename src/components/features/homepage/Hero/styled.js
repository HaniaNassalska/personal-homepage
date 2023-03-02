import styled from "styled-components";
import { ReactComponent as HireMe } from "./images/Button-default-LM.svg";
import { ReactComponent as HireMeDM } from "./images/Button-default-DM.svg";

export const Wrapper = styled.header`
   margin-top: 60px;
   display: grid;
   grid-template-columns: 1fr 1fr 170px;
   grid-column-gap: 64px;
   grid-template-areas:
   "... ... theme"
   "image about about";
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 0px;
      max-width: 100%;
      grid-template-columns: 1fr 50px;;
      grid-column-gap: 0px;
      grid-template-areas:
      "... theme"
      "image ..."
      "about about";
   };
`;

export const ThemeChanger = styled.button`
   justify-items: end;
   max-width: 163px;
   background-color: transparent;
   border: none;
   grid-area: theme;
   display: flex;
   flex-direction: row;
   justify-content: end;
   align-items: center;
   padding: 0px;
   gap: 12px;
   :hover{
      cursor: pointer;
   }
`;

export const Text = styled.p`
   font-weight: 700;
   font-size: 12px;
   line-height: 130%;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.textSecondary};
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: none;
   };
`;

export const Image = styled.img`
   grid-area: image;  
   max-width: 384px;
   border-radius: 100%;

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
     max-width: 150px;
   };
`;

export const About = styled.div`
   grid-area: about;  
   max-width: 633px;
`;

export const IntroductionText = styled.p`
   margin-top: 64px;
   font-weight: 700;
   font-size: 12px;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Name = styled.h1`
   margin-top: 12px;
   margin-bottom: 35px;
   font-style: normal;
   font-weight: 900;
   font-size: 38px;
   line-height: 46px;
   color: ${({ theme }) => theme.colors.text};
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 22px;
      line-height: 27px;
   };
`;

export const Info = styled.p`
   margin-top: -16px;
   color: ${({ theme }) => theme.colors.textSecondary};
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 17px;
      line-height: 140%;
   };
`;

export const HireGraphic = styled(HireMe)`
   margin-top: 32px;   
   width: 150px;
   transition: 0.5s;
   &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   };
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 10px;
   };
`;

export const HireGraphicDM = styled(HireMeDM)`
   margin-top: 32px;   
   max-width: 150px;
   transition: 0.5s;
   &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   };
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 10px;
   };
`;

export const Mail = styled.a`
`;

