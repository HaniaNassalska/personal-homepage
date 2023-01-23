import styled from "styled-components";
import { ReactComponent as GitHub } from "./Github.svg";
import { ReactComponent as LinkedIn } from "./LinkedIN.svg";

export const Wrapper = styled.div`
  max-width: 670px;
  margin-top: 130px;
  margin-bottom: 100px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
    margin-bottom: 48px;
    }
`

export const TextContainer = styled.div`
  max-width: 99px;
`;

export const Text = styled.p`
   font-weight: 700;
   font-size: 12px;
   line-height: 130%;
   text-transform: uppercase;
   color: ${({ theme }) => theme.colors.slateGray};
`;

export const Mail = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.mineShaft};
    &:hover{
      color: ${({ theme }) => theme.colors.scienceBlue};
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 18px;
      line-height: 22px;
    }
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.mineShaft};
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
    }
  `

export const IcoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  grid-gap: 24px;
`

export const IcoLink = styled.a`
`

export const GitHubIco = styled(GitHub)`
fill: ${({ theme }) => theme.colors.mineShaft};
  &:hover{
    fill: ${({ theme }) => theme.colors.scienceBlue};
  }  
`

export const LinkedInIco = styled(LinkedIn)`
  fill:  ${({ theme }) => theme.colors.mineShaft};
  &:hover{
    fill: ${({ theme }) => theme.colors.scienceBlue};
  }
`