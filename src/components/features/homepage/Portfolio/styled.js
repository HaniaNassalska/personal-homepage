import styled from "styled-components";
import { ReactComponent as GitHub } from "./../../../common/Ico/Github.svg";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
`;

export const GitHubIco = styled(GitHub)`
  fill: ${({ theme }) => theme.colors.scienceBlue};
  width: 40px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
  };
`;

export const ContentContainer = styled.div`
  grid-column: 1 / 3;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const Header = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  };
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: 20px;
  line-height: 140%;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  };
`;

export const PortfolioTile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 6% 9%;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
   grid-column: 1 / 3;
  };
 `;

export const TileHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.scienceBlue};
  letter-spacing: 0.05em;
  margin-top: 0px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  };
`;
export const TileText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;  
    };
`;

export const LinkWrapper = styled.div`
 display: grid;
 grid-template-columns: 60px 1fr;
 grid-gap: 15px;
 `

export const TileTextLink = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;  
  };
`;

export const TileLink = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.dodgerBlue};
  display: flex;
  align-items: center;  
  &:hover{
    color: ${({ theme }) => theme.colors.scienceBlue};
  };
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;  
  };
`;