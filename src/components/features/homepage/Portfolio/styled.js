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
  fill: ${({ theme }) => theme.colors.linkButtonBlue};
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
  color: ${({ theme }) => theme.colors.text};
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  };
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.text};
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  };
`;

