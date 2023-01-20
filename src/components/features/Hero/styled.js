import styled from "styled-components";

export const Wrapper = styled.header`
   margin-top: 110px;

   max-width: 1089px;
   display: grid;
   grid-template-columns: 1fr, 2 fr;
   grid-column-gap: 64px;
   grid-template-areas:
   "... theme"
   "image about"
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
`;

export const Info = styled.p`
   margin-top: -16px;
   color: ${({ theme }) => theme.colors.slateGray};
`;

export const HireGraphic = styled.img`
   margin-top: 32px;   
   max-width: 150px;

   &:hover{
      box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 
         2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
      border-radius: 4px;
   }
`;

export const Mail = styled.a`
`;

