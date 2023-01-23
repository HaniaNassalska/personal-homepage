import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1216px;
  margin: 64px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.whiteLilac};;
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
`;
