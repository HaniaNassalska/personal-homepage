import styled from "styled-components";

export const PortfolioTile = styled.div`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  padding: 6% 9%;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  border: 6px solid rgba(209, 213, 218, 0.3);
  transition: 1s;
  &:hover{
    border: 6px solid ${({ theme }) => theme.colors.tileHoverBlue};
  }
  
  @media(max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
   grid-column: 1 / 3;
  };
 `;

export const TileHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.linkButtonBlue};
  letter-spacing: 0.05em;
  margin-top: 0px;
  color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.textSecondary};
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
  color: ${({ theme }) => theme.colors.textSecondary};
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
  color: ${({ theme }) => theme.colors.linkButtonBlue};
  display: flex;
  align-items: center;  
  &:hover{
    text-decoration-color: ${({ theme }) => theme.colors.linkHoverBlue};
  };
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;  
  };
`;