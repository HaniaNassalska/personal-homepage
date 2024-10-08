import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1216px;
  margin: 64px 0px;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 100%;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 16px;
  margin-bottom: 32px;
  margin-left: 3%;
  margin-right: 3%;
`;

export const Header = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  padding-top: 32px;
  padding-left: 3%;
  padding-right: 3%;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ListWrapper = styled.div`
  padding: 0% 3% 1%;
`;

export const StyledList = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: grid;
  grid-template-rows: repeat(11, 1fr);
  grid-auto-flow: column;
  text-align: start;
  margin-left: -50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: -40px;
    margin-right: 0px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;

export const LearnList = styled(StyledList)`
  grid-template-rows: none;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  } ;
`;
export const Item = styled.li`
  font-size: 18px;
  line-height: 140%;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  padding-left: 3%;
  &:before {
    content: "\\25CF";
    color: ${({ theme }) => theme.colors.linkButtonBlue};
    width: 26px;
    padding-right: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 17px;
  }
`;
