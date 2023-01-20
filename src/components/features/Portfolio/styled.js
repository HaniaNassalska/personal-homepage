import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
 `;

export const HeaderWrapper = styled.div`
  grid-column: 1 / 3;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Header = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
`;

export const Paragraph = styled.p`
margin: 0 auto;
`;

export const PortfolioTile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 592px;
  max-height:322px;
  padding: 6% 9%;
`;

export const TileHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.scienceBlue};
  letter-spacing: 0.05em;
  margin-top: 0px;
`
export const TileText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
`
export const TileTextLink = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
`
export const TileLink = styled.a`
  color: ${({ theme }) => theme.colors.dodgerBlue};

  &:hover{
    color: ${({ theme }) => theme.colors.scienceBlue};
}
`;