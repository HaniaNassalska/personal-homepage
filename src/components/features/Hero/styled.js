import styled from "styled-components";

export const Wrapper = styled.header`
   margin-top: 110px;
   display: grid;
   grid-template-columns: 1fr 2fr;
   grid-column-gap: 64px;
   grid-template-areas:
   "... theme"
   "image about";
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 0px;
      max-width: 100%;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 0px;
      grid-template-areas:
      "... theme"
      "image ..."
      "about about";
   };
`;

export const ThemeChanger = styled.div`
   grid-area: theme;
   display: flex;
   flex-direction: row;
   justify-content: end;
   align-items: center;
   padding: 0px;
   gap: 12px;
`;

export const ModeText = styled.div`
   max-width: 99px;
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: none;
   };
`;

export const Text = styled.p`
   font-weight: 700;
   font-size: 12px;
   line-height: 130%;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.slateGray};
`;

export const Image = styled.img`
   grid-area: image;  
   max-width: 384px;
   border-radius: 100%;

   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
     max-width: 132px;
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
   color: ${({ theme }) => theme.colors.slateGray};
`;

export const Name = styled.h1`
   margin-top: 12px;
   margin-bottom: 35px;
   font-style: normal;
   font-weight: 900;
   font-size: 38px;
   line-height: 46px;
   color: ${({ theme }) => theme.colors.mineShaft};
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 22px;
      line-height: 27px;
   };
`;

export const Info = styled.p`
   margin-top: -16px;
   color: ${({ theme }) => theme.colors.slateGray};
   @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 17px;
      line-height: 140%;
   };
`;

export const HireGraphic = styled.img`
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

export const Mail = styled.a`
`;

